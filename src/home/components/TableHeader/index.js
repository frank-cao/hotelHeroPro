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
    console.log(defaultEnv, 'enc');

    return (
      <div className='header'>
        {/* <Spin spinning={spinStatus}></Spin> */}
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
    dispatch({ type: 'GENERATE_FILE', payload: { env, branch: 'master' } });
  },

  handleGetTableData() {
    dispatch({ type: 'USER_FETCH_REQUESTED', payload: '' });
    //  console.log(res)
  }
  // console.log(res)
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
