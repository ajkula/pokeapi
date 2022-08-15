import { actionTypes } from './actions';

export const addFavorite = pokemon => {
  return dispatch => {

    dispatch({
      type: actionTypes.ADD_FAVORITE,
      payload: pokemon.name,
    });

    setTimeout(() => dispatch({
      type: actionTypes.FAVORITE_OPERATION_DONE,
    }), 0);
  }
};

export const removeFavorite = pokemon => {
  return dispatch => {

    dispatch({
      type: actionTypes.REMOVE_FAVORITE,
      payload: pokemon.name,
    });

    setTimeout(() => dispatch({
      type: actionTypes.FAVORITE_OPERATION_DONE,
    }), 0);
  }
};