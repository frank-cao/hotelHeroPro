const defaultState = {
  list: []
}

export default (state = defaultState, actions) => {
  console.log(defaultState, state, actions)

  if (actions.type === 'GET_TABLE_DATA') {
    state.list.push('a')
    const newState = {
      ...state
    }
    console.log(newState)
    return newState
  }
  return state
}
