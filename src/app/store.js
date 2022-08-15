// import { configureStore } from '@reduxjs/toolkit';
// import PokeReducer from '../features/pokemons/reducer';
// import FavoritesReducer from '../features/favorites/reducer';

// export const store = configureStore({
//   reducer: {
//     pokemons: PokeReducer,
//     favorites: FavoritesReducer,
//   },
// });

import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import PokeReducer from '../features/pokemons/reducer';
import FavoritesReducer from '../features/favorites/reducer';

const reducers = combineReducers({
  pokemons: PokeReducer,
  favorites: FavoritesReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['favorites'], 
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});