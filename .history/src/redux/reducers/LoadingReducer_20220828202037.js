const initialState = {
    isLoading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'DISPLAY_LOADING':
    state.loading = true;
    return { ...state, ...payload }
  case 'HIDE_LOADING':
    return { ...state, ...payload }

  default:
    return {...state}
  
}}
