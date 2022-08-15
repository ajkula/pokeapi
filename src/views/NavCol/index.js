import React, { Component } from 'react';
import withRouter from '../../components/withRouter';
import { connect } from "react-redux";
import { fetchMorePokemons } from '../../features/pokemons/services';
import "./styles.css"

class NavCol extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  
  clickHandler = () => {
    console.log(this.props.pokemons.next);
    this.props.fetchMorePokemons(this.props.pokemons.next);
  }

  render() {
  return (
    <div className='styles'>
    <span>Izberg</span>
    <span>PokeApi</span>
    <span>Test</span>
    <div style={{marginTop: "70%"}}>
      <button className='btn btn-danger' onClick={this.clickHandler} >Fetch more</button>
    </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    pokemons: state.pokemons.list,
    favorites: state.favorites,
  };
}

export default withRouter(connect(mapStateToProps, { fetchMorePokemons })(NavCol));