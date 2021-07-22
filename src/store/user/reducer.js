import * as actionTypes from './types';

const initialState = {
  currentUser: null,
};

const setCurrentUser = (state, action) => {
  return {
    ...state,
    currentUser: action.payload,
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER: return setCurrentUser(state, action);
    default: return state;
  }
};

export default userReducer;