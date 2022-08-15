import update from 'immutability-helper';
import { actionTypes } from './actions';

const defaultState = {
    added: false,
    removed: false,
    data: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FAVORITE:
      return update(state, {
          added: { $set: true },
          data: { $push: [action.payload] },
      });
    
    case actionTypes.REMOVE_FAVORITE:
      const newData = state.data.filter(name => name !== action.payload);
      return update(state, {
          removed: { $set: true },
          data: { $set: newData },
      });

    case actionTypes.FAVORITE_OPERATION_DONE:
      return update(state, {
          added: { $set: false },
          removed: { $set: false },
      });

    default:
      return state;
  }
}

export default reducer;