import update from 'immutability-helper';
import { actionTypes } from './actions';

const defaultState = {
  list: {
    isFetching: false,
    isFetchingMore: false,
    data: [],
    error: null,
    next: null,
    previous: null,
  },
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.POKEMONS_FETCH_ALL_PENDING:
      return update(state, {
        list: {
          isFetching: { $set: true },
        }
      });
    
    case actionTypes.POKEMONS_FETCH_ALL_SUCCESS:
      return update(state, {
        list: {
          isFetching: { $set: false },
          data: { $set: action.payload.results },
          next: { $set: action.payload.next },
          previous: { $set: action.payload.previous },
        }
      });

    case actionTypes.POKEMONS_FETCH_ALL_FAILURE:
      return update(defaultState, {
        list: {
          isFetching: { $set: false },
          error: { $set: action.payload },
        }
      });

      case actionTypes.POKEMONS_FETCH_MORE_PENDING:
        return update(state, {
          list: {
            isFetchingMore: { $set: true },
          }
        });

      case actionTypes.POKEMONS_FETCH_MORE_SUCCESS:
        return update(state, {
          list: {
            isFetchingMore: { $set: false },
            data: { $push: action.payload.results },
            next: { $set: action.payload.next },
            previous: { $set: action.payload.previous },
          }
        });

      case actionTypes.POKEMONS_FETCH_MORE_FAILURE:
        return update(state, {
          list: {
            isFetchingMore: { $set: false },
            error: { $set: action.payload },
          }
        });

    default:
      return state;
  }
}

export default reducer;