// reduces

const defaultState = {
  tableList: []
}

export default (state = defaultState, actions) => {
  // console.log(defaultState, state, actions)
const { type, selectedEnv} = actions
  if (type === 'GET_TABLE_DATA') {
    const newState = {
      ...state,
      selectedEnv
    }
    // console.log(newState, actions)
    return newState
  }
  if (type === 'USER_FETCH_SUCCEEDED') {
    console.log(actions, 'successReduce');
    const { user = [] } = actions
    state.tableList = user
    return {...state}
  }
  return state;
}
