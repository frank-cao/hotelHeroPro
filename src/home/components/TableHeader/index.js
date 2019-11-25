/*
  auth: frank
  date: 
*/

import React from 'react';
import { Button, Select, Spin } from 'antd';

import { connect } from 'react-redux';
import './index.scss';

const { Option } = Select;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultEnv: ''
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

  render() {
    // 获取当前环境 loading状态
    const { defaultEnv = '' } = this.state;
    const {
      defaultState: { loadingStatus }
    } = this.props;

    return (
      <div className='header'>
        {/* 项目名称 */}
        <div className='project-name'>酒店英雄小程序</div>
        {/* 环境 */}
        <Select
          style={{ width: 200 }}
          value={defaultEnv}
          placeholder='请选择打包环境'
          onChange={this.handleChange}
        >
          <Option value='test'>打包环境: test</Option>
          <Option value='uat'>打包环境: uat</Option>
          <Option value='build'>打包环境: build</Option>
        </Select>
        {/* 生成按钮 */}
        <Button
          type='primary'
          className='generate-btn'
          onClick={() => {
            this.handleChangeSpinStatus();
          }}
        >
          生成
        </Button>
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
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
