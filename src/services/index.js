// services 请求

const axios = require('axios');

// mock
export function fetchJson () {
  return new Promise((resolve, reject) => {
    // console.log(axios, 'axios')
    axios.get('api/list',{timeout: 300000}).then(res => {
  console.log(res)
      resolve(res.data)
    }).catch((error) => {
  console.log(error, 'error----')
    })
  })
}
