// reduces

const defaultState = {
  tableList: [],
  loadingStatus: false
};

export default (state = defaultState, actions) => {
  // console.log(defaultState, state, actions)
  const { type} = actions

  if (type === 'HANDLE_LOADING_STATUS') {
    state.loadingStatus = true
    return { ...state };
  }
  if (type === 'GET_TABLE_DATA_SUCCESS') {
    // console.log(actions, 'successReduce');
    const { user = [] } = actions;
    state.tableList = user;
    state.loadingStatus = false;
    return { ...state };
  }

  if (type === 'GENERATE_FILE_SUCCESS') {
    console.log(actions, 'successGen')
    state.loadingStatus = true;
    return { ...state };
  }

  return state;
}
