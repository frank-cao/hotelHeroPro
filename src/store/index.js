// react-redux

import {createStore} from 'redux';
import reducer from './reducers'

// import { createStore, applyMiddleware } from 'redux';
//  import createSagaMiddleware from 'redux-saga';

//  import helloSaga from './saga'
//  import rootReducer from './reducers'

 // 创建 saga middleware
  // const sagaMiddleware  = createSagaMiddleware();

 // 创建 store
 const store = createStore(
   reducer,
  //  applyMiddleware(sagaMiddleware)   // 注入 saga middleware
 );

 // 启动 saga
//  sagaMiddleware.run(helloSaga);

// const store = createStore(reducer)

export default store
