import React from 'react';
import './cardLayout.css';
import Card from '../../components/card/Card';

const CardLayout = ({ pokemons }) => {
  return (
  <div className='container' >
    {pokemons.data.map((pokemon, key) => <Card key={key} pokemon={pokemon} />)
      }
  </div>)
}

export default CardLayout;