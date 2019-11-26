/*
  auth: frank
  date: 
*/

import React from 'react';
import { Form, Row, Col, Button, Select, Spin } from 'antd';

import { connect } from 'react-redux';
import './index.scss';

const { Option } = Select;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultEnv: 'build'
    };
  }

  componentDidMount() {
    // 获取tableData
    const { handleGetTableData } = this.props;
    handleGetTableData();
  }

  // 获取当前环境
  handleChange = value => {
    console.log(value);
    this.setState({
      ...this.state,
      defaultEnv: value
    });
  };

  // 改变loading状态同时生成文件
  handleChangeSpinStatus = () => {
    const { handleGenerateBtn } = this.props;
    const { defaultEnv } = this.state;
    handleGenerateBtn(defaultEnv);
  };

  // 清空数据
  handleClearBtn = () => {
    const { handleClearDataBtn } = this.props;
    handleClearDataBtn();
  }

  render() {
    // 获取当前环境 loading状态
    const { defaultEnv } = this.state;
    const {
      defaultState: { loadingStatus }
    } = this.props;

    return (
      <div className='header'>
        <Form
          labelCol={{ span: 4, offset: 0 }}
          wrapperCol={{ span: 20, offset: 0 }}
        >
          <Row gutter={24}>
            <Col span={6}>
              <Form.Item label='项目名称' labelAlign={'left'}>
                <Select
                  value={'hotelHero'}
                  placeholder='请选择项目'
                  onChange={this.handleChange}
                >
                  <Option value='hotelHero'>酒店英雄小程序</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label='打包环境' labelAlign={'left'}>
                <Select
                  value={defaultEnv}
                  placeholder='请选择打包环境'
                  onChange={this.handleChange}
                >
                  <Option value='test'>test</Option>
                  <Option value='uat'>uat</Option>
                  <Option value='build'>build</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Button
                  type='primary'
                  className='generate-btn'
                  onClick={() => {
                    this.handleChangeSpinStatus();
                  }}
                >
                  生成
                </Button>

                <Button
                  type='primary'
                  className='clear-btn'
                  onClick={() => {
                    this.handleClearBtn();
                  }}
                >
                  清空
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        {/* 项目名称 */}

        {/* loading */}
        <Spin
          className='spin-wrap'
          style={{
            height: window.innerHeight,
            marginTop: -window.innerHeight / 2,
            lineHeight: window.innerHeight + 'px'
          }}
          spinning={loadingStatus}
        ></Spin>
      </div>
    );
  }
}

// redux值获取
const mapStateToProps = state => {
  return {
    defaultState: state
  };
};

// dispatch
const mapDispatchToProps = dispatch => ({

  // 生成文件
  handleGenerateBtn(env) {
    dispatch({type: 'HANDLE_LOADING_STATUS'})
    dispatch({ type: 'GENERATE_FILE', payload: { env, branch: 'master' } });
  },

  // 获取table数据
  handleGetTableData() {
    dispatch({ type: 'HANDLE_LOADING_STATUS' });
    dispatch({ type: 'GET_TABLE_DATA', payload: '' });
  },

  // 清空table数据
  handleClearDataBtn() {
    dispatch({ type: 'HANDLE_LOADING_STATUS' });
    dispatch({ type: 'CLEAR_TABLE_DATA', payload: '' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
