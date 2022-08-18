import React from 'react';
import './favLayout.css';
import Fav from '../../components/favorite/Fav';

const FavLayout = ({ favorites }) => {
  return (
  <div className='favContainer' >
    {favorites.data.map((favorite, key) => <Fav key={key} favorite={favorite} />)
      }
  </div>)
}

export default FavLayout;