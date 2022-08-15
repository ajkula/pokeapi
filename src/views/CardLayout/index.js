import React from 'react';
import './card.css';
import Card from './Card';

const CardLayout = ({ pokemons }) => {
  return (
  <div className='container' >
    {pokemons.data.map((pokemon, key) => <Card key={key} pokemon={pokemon} />)
      }
  </div>)
}

export default CardLayout;