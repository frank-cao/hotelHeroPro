/*
  auth: frank
  date: 
*/
import { message } from 'antd';
import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

// import axios from ‘axios’
import { getTableData, generateFile, clearTableData } from '../services';

// 表格数据获取
function* GetTableData() {
  try {
    const user = yield call(getTableData);
    console.log(user, 'getRes')
    yield put({
      type: "GET_TABLE_DATA_SUCCESS",
      user: user.data
    });
    
  } catch (e) {
    
  }
}

// 清空数据接口
function* ClearTableData() {
  try {
    yield call(clearTableData)
    message.success('清空成功');
     // 数据清空后再次请求表格数据
    yield GetTableData()
  } catch (error) {
    message.error('清空数据失败')
  }
}

// 生成文件
function* GenerateFile (action) {
  try {
    const res = yield call(generateFile, action.payload)
    // console.log(res, 'generate')
    // 文件生成成功进行reduce处理
    yield put({
      type: 'GENERATE_FILE_SUCCESS',
      data: res.data
    })
    // 文件生成成功再次请求表格数据
    yield GetTableData()
  } catch (error) {
    
  }
}


/*
  开始执行 dispatch GET_TABLE_DATA  GENERATE_FILE action
*/
function* mySaga() {
  yield takeEvery("GET_TABLE_DATA", GetTableData);
  yield takeEvery('GENERATE_FILE', GenerateFile);
  yield takeEvery('CLEAR_TABLE_DATA', ClearTableData)
}


export default mySaga;