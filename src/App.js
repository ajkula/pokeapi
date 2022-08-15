import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { config }      from './config';
import { connect } from 'react-redux';
import NavCol from './views/NavCol';
import Pokemons from './views/Pokemons';

import withRouter from './components/withRouter';

const Favorites = () => <div>FAVORITES LIST</div>

class App extends Component {

  render() {
    return (
      <div className='flexbox'>
        <NavCol className='left' />
        <div className='right'>
          <h1>POKEMON</h1>
            <Routes>
              <Route  path={config.path.pokemons} element={<Pokemons />} />
              <Route exact path={config.path.favorites} element={<Favorites />} />
            </Routes>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    default: state.default
  };
}

export default withRouter(connect(mapStateToProps, {  })(App));