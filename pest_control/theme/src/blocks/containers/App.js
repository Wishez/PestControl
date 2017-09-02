import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import classNames from 'classnames';

import Header from './../components/Header';
import Footer from './../components/Footer';
import Main from './../components/Main';
import { openMakeOrderForm } from './../actions/appActions.js';

class App extends Component {
  static PropTypes = {
    dispatch: PropTypes.func.isRequired,
    isOpenMakeOrderForm: PropTypes.bool.isRequired
  }

	
  getVisibilitySwitchButtonClasses = isActive => (
    classNames({
      "header__figure": true,
      "header__figure--name_button": true,
      "header__figure--state_active": isActive
    })
  );

  openOrderForm = () => {
    const { dispatch } = this.props;

    dispatch(openMakeOrderForm());
  }

  render() {
    return (
    	<div>
      	<Header 
          getVisibilitySwitchButtonClasses={this.getVisibilitySwitchButtonClasses} 
          openMakeOrderForm={this.openOrderForm}
          closeMakeOrderForm={this.closeOrderForm}
          {...this.props} 
        />
      	<Main />	
      	<Footer email='support@pest_control.ru'
          tel='+7 (926) 370-78-12' />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;

  const {
    isOpenMakeOrderForm
  } = app;

  return {
    isOpenMakeOrderForm
  };
};

export default withRouter(connect(mapStateToProps)(App));