import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 

class PresentContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
	componentDidMount() {
		
	}

  render() {
    return (
      <MainContentContainer>
        <section>It is first section!</section>
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(PresentContainer);