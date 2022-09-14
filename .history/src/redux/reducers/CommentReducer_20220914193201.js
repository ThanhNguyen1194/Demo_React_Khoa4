import { GET_ALL_COMMENTS } from "../constants/Cyberbugs/CommentConstans"

const initialState = {
    listComment:{}
}

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_ALL_COMMENTS:
    return { ...state}

  default:
    return state
  }
}
