/*
  auth: frank
  date: 
*/

// reduce进行state处理

// 默认值
const defaultState = {
  tableList: [], // 表格数据
  loadingStatus: false // 初始状态 false
};

export default (state = defaultState, actions) => {
  const { type} = actions

  // loading状态设置为true
  if (type === 'HANDLE_LOADING_STATUS') {
    state.loadingStatus = true
    return { ...state };
  }

  // 表格数据获取成功处理
  if (type === 'GET_TABLE_DATA_SUCCESS') {
    const { user = [] } = actions;
    state.tableList = user;
    state.loadingStatus = false;
    return { ...state };
  }
  
  if (type === 'STATUS_FAIL') {
    state.loadingStatus = false;
    return { ...state };
  }

  // 文件生成成功数据状态处理
  if (type === 'GENERATE_FILE_SUCCESS') {
    console.log(actions, 'successGen')
    state.loadingStatus = true;
    return { ...state };
  }

  return state;
}
