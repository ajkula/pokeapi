import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFavorite } from '../../features/favorites/services';
import './fav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faSquare } from '@fortawesome/free-solid-svg-icons';

const Fav = (props) => {
  const {favorite, removeFavorite} = props;
  const [isFavorite, toggleFavorite] = useState(true);
  const checkBox = isFavorite ? faCheckSquare : faSquare;
  const pokemon = {name: favorite};

  const onClickHandler = e => {
    e.preventDefault();
    console.log(e.target);
    removeFavorite(pokemon);
    toggleFavorite(false);
  };

  return (
  <div className="line">
      <div className="topLine">
        <span>{pokemon.name}</span>
        <FontAwesomeIcon icon={checkBox} color="white" border onClick={onClickHandler} />
      </div>
    </div>);
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}


export default connect(mapStateToProps, { removeFavorite })(Fav);