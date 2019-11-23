import React from 'react';
import { Table } from 'antd';
import {connect} from 'react-redux';
import './index.scss'


const columns = [
  {
    title: 'branch',
    dataIndex: 'branch',
    key: 'branch'
  },
  {
    title: 'env',
    dataIndex: 'env',
    key: 'env'
  },
  {
    title: 'time',
    dataIndex: 'time',
    key: 'time'
  },
  {
    title: 'url',
    dataIndex: 'url',
    key: 'url'
  }
];

const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

class TableContent extends React.Component {

  // constructor(props) {
  //   super(props)
  //   console.log(props, '-=-')
  // }

  render() {
    console.log(this.props, 'renderContent');
    const { tableList } = this.props.state;
    return (
      <div className='table'>
        <Table columns={columns} dataSource={tableList} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state, 'state---')
  return {
    state
  }
}

export default connect(
  mapStateToProps
)(TableContent)
