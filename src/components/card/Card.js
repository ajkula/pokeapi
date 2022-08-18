import React, { useState } from "react";
import { connect } from "react-redux";
import { addFavorite, removeFavorite } from '../../features/favorites/services';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  const {pokemon, favorites, addFavorite, removeFavorite} = props;
  const [isFavorite, toggleFavorite] = useState(
    Array.prototype.find.apply(favorites.data, [name => name === pokemon.name]) === undefined ?
      false : true);
  const checkBox = isFavorite ? faCheckSquare : faSquare;

  const onClickHandler = e => {
    e.preventDefault();
    if (isFavorite) {
      removeFavorite(pokemon);
      return toggleFavorite(false);
    }
    addFavorite(pokemon);
    return toggleFavorite(true);
  };

  return (
  <div className="pokecard">
    <div className="topLine">
      <span>{pokemon.name}</span>
      <FontAwesomeIcon icon={checkBox} color="white" border onClick={onClickHandler} />
    </div>
    <img className='pokeImage' src={pokemon.sprite} alt={pokemon.name} />
    <span className="pokeSkill">{pokemon.type.join(" + ")}</span>
  </div>);
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}


export default connect(mapStateToProps, { addFavorite, removeFavorite })(Card);