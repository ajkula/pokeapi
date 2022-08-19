import React, { Component } from 'react';
import withRouter from '../../components/withRouter';
import { connect } from "react-redux";
import { config }      from '../../config';
import { fetchMorePokemons } from '../../features/pokemons/services';
import "./styles.css"

class NavCol extends Component {
  constructor(props) {
    super(props);
  }
  
  clickHandler = () => {
    this.props.fetchMorePokemons(this.props.pokemons.next);
  }

  goToPokemons = () => {
    this.props.navigate(config.path.pokemons);
  }

  goToFavorites = () => {
    this.props.navigate(config.path.favorites);
  }

  render() {
    const btnStyle = {margin: "5px"};

    return (
      <div className='styles'>
      <span>Izberg</span>
      <span>PokeApi</span>
      <span>Test</span>
      <div style={{display: "flex", flexDirection: "column", marginTop: "70%"}}>
        {this.props.location.pathname === "/" && <button  className='btn btn-danger' style={btnStyle} onClick={this.clickHandler} >Fetch more</button>}
        <button className='btn btn-info' style={btnStyle} onClick={this.goToPokemons} >Go to Pokemons</button>
        <button className='btn btn-success' style={btnStyle} onClick={this.goToFavorites} >Go to Favorites</button>
      </div>
      </div>);
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.list,
    favorites: state.favorites,
  };
}

export default withRouter(connect(mapStateToProps, { fetchMorePokemons })(NavCol));