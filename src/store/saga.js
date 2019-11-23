import {
  call,
  put,
  takeEvery,
  // takeLatest
} from 'redux-saga/effects'

// import axios from ‘axios’
import { fetchJson } from '../services';

function* fetchUser(action) {
  try {
    const user = yield call(fetchJson, action.payload.userId);
    console.log(user, 'getRes')
    yield put({
      type: "USER_FETCH_SUCCEEDED",
      user: user.data
    });
  } catch (e) {
    // yield put({
    //   type: "USER_FETCH_FAILED",
    //   message: e.message
    // });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}


export default mySaga;