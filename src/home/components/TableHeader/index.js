import React from 'react';
import { Button, Select } from 'antd';

import {connect} from 'react-redux';
import {getTableData} from '../../../store/actions'
import './index.scss';

const { Option } = Select;

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultEnv: ''
    };
  }

  handleChange = (value) => {

  
    console.log(value)
    this.setState({
      ...this.state,
      defaultEnv: value
    })
  }


  render() {

    const {defaultEnv} = this.state
    console.log(defaultEnv, 'enc')
    const {handleGetTableData} = this.props

    return (
      <div className="header">
        <Select
          style={{ width: 200 }}
          placeholder="请选择打包环境"
          defaultValue={defaultEnv}
          onChange={this.handleChange}
        >
          <Option value='develop'>develop</Option>
          <Option value='release-test'>release-test</Option>
          <Option value='release-prod'>release-prod</Option>
        </Select>
        <Button type="primary" className="search-btn" onClick={() => {handleGetTableData(defaultEnv)}}>搜索</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => ({

        handleGetTableData(type) {

    console.log(dispatch, 'props')
    dispatch({type: 'USER_FETCH_REQUESTED', payload: 'cyu'})
            // dispatch(getTableData(type))
        }
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)
