import React, { Component } from 'react';
import withRouter from '../../components/withRouter';
import { connect } from "react-redux";
import FavLayout from '../FavLayout';

class Favorite extends Component {

  render() {
    return (<FavLayout favorites={this.props.favorites} />)
  }
}

function mapStateToProps(state) {
  return {
    favorites: state.favorites,
  };
}

export default withRouter(connect(mapStateToProps, {  })(Favorite));