

/*
  auth: frank
  date: 
*/


//  高阶组件进行antd引入优化
 const {
   override,
   fixBabelImports,
   addLessLoader
 } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader ({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#1DA57A'
    }
  }),
);