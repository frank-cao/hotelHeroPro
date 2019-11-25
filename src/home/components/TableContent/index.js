/*
  auth: frank.cao
  date: ''
  email: ''
*/

import React from 'react';
import { Table, Button } from 'antd';
import { connect } from 'react-redux';
import './index.scss';

class TableContent extends React.Component {
  // 表头
  columns = [
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
    },
    {
      title: 'download',
      dataIndex: 'download',
      key: 'download',
      render: (text, record, index) => (
        <Button
          type='primary'
          className='download-btn'
          onClick={() => this.handleDownloadBtn(record, index)}
        >
          下载
        </Button>
      )
    }
  ];

  // 下载
  handleDownloadBtn = (record, index) => {
    // console.log(record, index, '====');
    const host = 'http://192.168.90.134:7001';
    const { url = '' } = record;
    window.location.href = host + '' + url;
  };

  render() {
    console.log(this.props, 'renderContent');
    const { tableList } = this.props.state;
    return (
      <div className='table'>
        <Table columns={this.columns} dataSource={tableList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps)(TableContent);
