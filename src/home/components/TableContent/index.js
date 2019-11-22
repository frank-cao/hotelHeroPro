import React from 'react';
// import { Table } from 'antd';
import {connect} from 'react-redux';

// const columns = [
//   {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a>{text}</a>,
//   },
//   {
//     title: 'Age',
//     dataIndex: 'age',
//     key: 'age',
//   },
//   {
//     title: 'Address',
//     dataIndex: 'address',
//     key: 'address',
//   },
// ]

// const data = [{
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ];

class TableContent extends React.Component {



  render() {
    return (
      <div className="table">
        {
          console.log(this.props, '9898')
        }
        {/* <Table columns={columns} dataSource={data} /> */}
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
