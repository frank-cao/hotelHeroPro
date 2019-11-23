// reduces

const defaultState = {
  list: [],
  selectedEnv: ''
}

export default (state = defaultState, actions) => {
  console.log(defaultState, state, actions)
const { type, selectedEnv} = actions
  if (type === 'GET_TABLE_DATA') {
    state.list.push('12')
    const newState = {
      ...state,
      selectedEnv
    }
    // console.log(newState, actions)
    return newState
  }
  if (type === 'USER_FETCH_SUCCESS') {
console.log('successReduce')
  }
  return state
}
