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
    const { handleGetTableData } = this.props;
    // const { defaultEnv } = this.state;
    handleGetTableData();
  }

  handleChange = value => {
    console.log(value);
    this.setState({
      ...this.state,
      defaultEnv: value
    });
  };

  handleChangeSpinStatus = () => {
    const { handleGenerateBtn } = this.props;
    const { defaultEnv } = this.state;
    handleGenerateBtn(defaultEnv);
  };

  render() {
    const { defaultEnv } = this.state;
    const {
      defaultState: { loadingStatus }
    } = this.props;
    console.log(this.props, 'enc');

    return (
      <div className='header'>
        <Select
          style={{ width: 200 }}
          placeholder='请选择打包环境'
          defaultValue={defaultEnv}
          onChange={this.handleChange}
        >
          <Option value='develop'>develop</Option>
          <Option value='release-test'>release-test</Option>
          <Option value='release-prod'>release-prod</Option>
        </Select>
        <Button
          type='primary'
          className='generate-btn'
          onClick={() => {
            this.handleChangeSpinStatus();
          }}
        >
          生成
        </Button>
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

const mapStateToProps = state => {
  return {
    defaultState: state
  };
};

const mapDispatchToProps = dispatch => ({

  handleGenerateBtn(env) {
    console.log(env);
    dispatch({type: 'HANDLE_LOADING_STATUS'})
    dispatch({ type: 'GENERATE_FILE', payload: { env, branch: 'master' } });
  },

  handleGetTableData() {
    dispatch({ type: 'HANDLE_LOADING_STATUS' });
    dispatch({ type: 'GET_TABLE_DATA', payload: '' });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
