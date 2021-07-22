import * as actionTypes from './types';

export const setCurrentUser = currentUser => {
  return {
    type: actionTypes.SET_CURRENT_USER,
    payload: currentUser,
  }
};