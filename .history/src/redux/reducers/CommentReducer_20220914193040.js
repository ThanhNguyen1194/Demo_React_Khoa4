const initialState = {
    listComment:{}
}

export default CommentReducer (state = initialState, action) => {
  switch (action.type) {

  case first:
    return { ...state, ...payload }

  default:
    return state
  }
}
