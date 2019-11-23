// react-redux

// import {createStore} from 'redux';
import reducer from './reducers'

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mySaga from './saga'

 // 创建 saga middleware
  // const sagaMiddleware  = createSagaMiddleware();
  const sagaMiddleware = createSagaMiddleware();

 // 创建 store
 const store = createStore(
   reducer,
  //  applyMiddleware(sagaMiddleware)   // 注入 saga middleware
  applyMiddleware(sagaMiddleware) // 注入 saga middleware
 );

 // 启动 saga
sagaMiddleware.run(mySaga)
// const store = createStore(reducer)
console.log(store, 'store')
export default store
