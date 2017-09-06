
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 
import Services from './../components/Services';
import { tryGetServicesIfNeeded } from './../actions/appActions.js';


class ServicesContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    services: PropTypes.array.isRequired
  }
  
	componentDidMount() {
		  this.props.dispatch(tryGetServicesIfNeeded());
	}

  render() {
    return (
      <MainContentContainer>
		    <Services {...this.props} />
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    app 
  } = state;

  const {
    services
  } = app;
  
  return {
    services: Object.assign([], services)
  };
};

export default withRouter(connect(mapStateToProps)(ServicesContainer));