import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 

class ContactsContainer extends Component {

  static PropTypes = {

  }
  
	componentDidMount() {
		
	}

  render() {
    return (
      <MainContentContainer>
        <section>It is third section!</section> 
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(ContactsContainer));