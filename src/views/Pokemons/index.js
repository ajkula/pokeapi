import React, { Component } from 'react';
import withRouter from '../../components/withRouter';
import { connect } from "react-redux";
import { fetchPokemons } from '../../features/pokemons/services';

import CardLayout from '../CardLayout';

class Pokemons extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    if (this.props.pokemons.isFetching) {
      return <div>IS LOADING... PROBABLY</div>
    }

    return (<CardLayout pokemons={this.props.pokemons} />)
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.list,
    favorites: state.favorites,
  };
}

export default withRouter(connect(mapStateToProps, { fetchPokemons })(Pokemons));