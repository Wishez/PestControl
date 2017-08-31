import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Header from './../components/Header';
import Footer from './../components/Footer';
import Main from './../components/Main';


class App extends Component {
	componentDidMount() {
		
	}

  render() {
    return (
    	<div>
      	<Header />
      	<Main />	
      	<Footer email='support@pest_control.ru'
          tel='+7 (926) 370-78-12' />
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(App));