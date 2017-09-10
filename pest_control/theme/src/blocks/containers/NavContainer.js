import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Navigation from './../components/Navigation';
import { closeFormsAndSelectNavigationItem } from './../actions/navigationActions.js';
import { 
  openOrderCallbackForm
} from './../actions/appActions.js';

class NavContainer extends Component {
  static PropTypes = { 
      navigationItems: PropTypes.array.isRequired,
      dispatch: PropTypes.func.isRequired
  }

  state = {
      isOpen: false
  };

  openMenu = () => {
    let $navList = $('#navList');
    let $closeButton = $('#closeMenuButton');
    if (!this.state.isOpen) {
      this.setState({isOpen: true});
      $closeButton.show();
      $navList.show('fast')
      $navList[0].style.display = 'flex';
    } else {
      this.setState({isOpen: false});
      $navList.hide('fast');
      $closeButton.hide();
    }
  };

  smoothRise = e => {
    // console.log(e.target, '<=== is scroll button');
    let element = $(e.target).attr('href');
    if (!element)
      element = $(e.target).parent().attr('href');
    const pathTo = $(element).offset().top;
    // console.log(element, '<=== element from href');
    $('body, html')
      .stop()
      .animate({
        scrollTop: pathTo
      }, 800);

  }

  changeActiveNavigationItem = navigationItem => {
      return () => {
        this.props.dispatch(closeFormsAndSelectNavigationItem(navigationItem));
      }


  };

  getActiveClasses = state => ( 
    classNames({
      'navItem': true,
      'navItem--active': state
    })
  );
   
  closeMenu = () => {
    let $navList = $('#navList');
    if (window.innerWidth < 767) $navList.hide('fast');
  }


  closeCallbackForm = () => {
    const { dispatch } = this.props;

    dispatch(closeOrderCallbackForm());
  }

  closeOrderForm = () => {
    const { dispatch } = this.props;

    dispatch(closeMakeOrderForm());
  }

  openCallbackForm = () => {
    const { dispatch } = this.props;
    console.log(openOrderCallbackForm(), 'action');
    dispatch(openOrderCallbackForm());
  }


  render() {

    return (
        <Navigation {...this.props}
            getActiveClasses={this.getActiveClasses}
            openMenu={this.openMenu}
            closeMenu={this.closeMenu}
            changeActiveNavigationItem={this.changeActiveNavigationItem}
            smoothRise={this.smoothRise}
            openOrderCallbackForm={this.openCallbackForm}
        />
    );
  }
}


const mapStateToProps = state => {
  const { navigation } = state;
  let navigationItems = [];

  for (const prop in navigation) {
    navigationItems.push(navigation[prop]);
  }
  
  return {
    navigationItems
  }
}

export default withRouter(connect(mapStateToProps)(NavContainer));