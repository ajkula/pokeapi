import axios from 'axios';
import { config } from '../../config';
import { actionTypes } from './actions';
import { map } from 'async';

const fetchAll = () => {
  let url = config.pokeapi.url;
  return new Promise((resolve, reject) => {
    axios.request({
      url,
      method: 'get',
    })
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        return reject(error.data);
      })
  })
};

const fetchMore = (url) => {
  return new Promise((resolve, reject) => {
    axios.request({
      url,
      method: 'get',
    })
      .then(response => {
        return resolve(response.data);
      })
      .catch(error => {
        return reject(error.data);
      })
  })
};


export const fetchPokemons = () => {
  return dispatch => {
    dispatch({
      type: actionTypes.POKEMONS_FETCH_ALL_PENDING,
    });

    return fetchAll()
      .then(response => {
        map(response.results, (item, callback) => {
          fetchMore(item.url)
            .then(res => callback(null, res))
            .catch(res => callback(res))
        }, (err, results) => {
          if (err) {
            return dispatch({
              type: actionTypes.POKEMONS_FETCH_ALL_FAILURE,
              payload: err,
            });
          }

          response.results = results.map(item => {
            let fullPokemon = Object.assign(response.results.find(poke => poke.name === item.name), item);
            return {
              id: fullPokemon.id,
              url: fullPokemon.url,
              name: fullPokemon.name,
              type: fullPokemon.types.map(types => types.type.name),
              sprite: fullPokemon.sprites.front_default,
            }
          })

          return dispatch({
            type: actionTypes.POKEMONS_FETCH_ALL_SUCCESS,
            payload: response,
          })
        })
        
      })
      .catch(err => {
        return dispatch({
          type: actionTypes.POKEMONS_FETCH_ALL_FAILURE,
          payload: err,
        });
      })
  }
};

export const fetchMorePokemons = (url) => {
  return dispatch => {
    dispatch({
      type: actionTypes.POKEMONS_FETCH_MORE_PENDING,
    });

    return fetchMore(url)
      .then(response => {
        map(response.results, (item, callback) => {
          fetchMore(item.url)
            .then(res => callback(null, res))
            .catch(res => callback(res))
        }, (err, results) => {
          if (err) {
            return dispatch({
              type: actionTypes.POKEMONS_FETCH_MORE_FAILURE,
              payload: err,
            });
          }

          response.results = results.map(item => {
            let fullPokemon = Object.assign(response.results.find(poke => poke.name === item.name), item);
            return {
              id: fullPokemon.id,
              url: fullPokemon.url,
              name: fullPokemon.name,
              type: fullPokemon.types.map(types => types.type.name),
              sprite: fullPokemon.sprites.front_default,
            }
          })

          return dispatch({
            type: actionTypes.POKEMONS_FETCH_MORE_SUCCESS,
            payload: response,
          })
        })
        
      })
      .catch(err => {
        
        console.log(actionTypes.POKEMONS_FETCH_MORE_FAILURE, err)
        return dispatch({
          type: actionTypes.POKEMONS_FETCH_MORE_FAILURE,
          payload: err,
        });
      })
  }
};