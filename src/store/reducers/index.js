// reduces

const defaultState = {
  tableList: []
}

export default (state = defaultState, actions) => {
  // console.log(defaultState, state, actions)
const { type} = actions
  // if (type === 'GET_TABLE_DATA') {
  //   const newState = {
  //     ...state,
  //     selectedEnv
  //   }
  //   // console.log(newState, actions)
  //   return newState
  // }
  if (type === 'GET_TABLE_DATA_SUCCESS') {
    // console.log(actions, 'successReduce');
    const { user = [] } = actions;
    state.tableList = user;
    return { ...state };
  }

  if (type === 'GENERATE_FILE_SUCCESS') {
    console.log(actions, 'successGen')
    return {
      ...state,
      generateFileSerStatus: true
    }
  }
  return state;
}
