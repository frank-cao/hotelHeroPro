/*
  auth: frank
  date: 
*/

// services 接口请求

const axios = require('axios');

// 获取table数据
export function getTableData() {
  return new Promise((resolve, reject) => {
    axios
      .get('/testPackage/list', {
        timeout: 30000
      })
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        console.log(error, 'error----');
      });
  });
}

// 生成文件
export function generateFile(params) {
  const { env = '', branch = '' } = params;
  return new Promise((resolve, reject) => {
    axios
      .get(`/testPackage?env=${env}&branch=${branch}`, { timeout: 30000 })
      .then(res => {
        console.log(res);
        resolve(res);
      })
      .catch(err => {});
  });
}
