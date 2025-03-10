/*
  auth: frank
  date: 
*/

import React from 'react';
import { Form, Row, Col, Button, Select, Spin, Modal } from 'antd';

import { connect } from 'react-redux';
import './index.scss';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    span: 6, offset: 0
  },
  wrapperCol: {
    span: 18, offset: 0
  }
};


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultEnv: 'build',
      visibleStatus: false
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

  // 清空数据确认弹框
  handleClearBtn = () => {
    this.setState({
      ...this.state,
      visibleStatus: true
    });
  };

  // 确认清空数据
  handleOk = () => {
    const { handleClearDataBtn } = this.props;
    handleClearDataBtn();
     this.setState({
       ...this.state,
       visibleStatus: false
     });
  };

  // 取消清空数据
  handleCancel = () => {
    this.setState({
      ...this.state,
      visibleStatus: false
    });
  }

  render() {
    // 获取当前环境 loading状态
    const { defaultEnv, visibleStatus } = this.state;
    const {
      defaultState: { loadingStatus }
    } = this.props;

    return (
      <div className='header'>
        <Form {...formItemLayout} className='ant-advanced-search-form'>
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
            <Col span={5}>
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
                  type='danger'
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

        {/* modal */}
        <Modal
          title='清空数据'
          visible={visibleStatus}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText='确认'
          cancelText='取消'
        >
          <p>是否确定清空数据</p>
        </Modal>

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
