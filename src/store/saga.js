import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects'

// import axios from ‘axios’
import { getTableData, generateFile } from '../services';

function* GetTableData() {
  try {
    const user = yield call(getTableData);
    console.log(user, 'getRes')
    yield put({
      type: "GET_TABLE_DATA_SUCCESS",
      user: user.data
    });
    
  } catch (e) {
    // console.error('')
    // yield put({
    //   type: "USER_FETCH_FAILED",
    //   message: e.message
    // });
  }
}

function* GenerateFile (action) {
  try {
    const res = yield call(generateFile, action.payload)
    console.log(res, 'generate')
    yield put({
      type: 'GENERATE_FILE_SUCCESS',
      data: res.data
    })
    yield GetTableData()
  } catch (error) {
    
  }
}

/*
  开始执行 dispatch USER_FETCH_REQUESTED  GENERATE_FILE action
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", GetTableData);
  yield takeEvery('GENERATE_FILE', GenerateFile);
}


export default mySaga;