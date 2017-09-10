import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 
import Section from './../components/Section';
import Advice from './../components/Advice';
import { tryGetAdviceIfNeeded } from './../actions/appActions.js';
import { selectNavigationItem } from './../actions/navigationActions.js';
import { initNavigationState } from './../reducers/navigation.js';

class SingleAdviceContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    advice: PropTypes.object.isRequired
  }
  
	componentDidMount() {
    const { dispatch } = this.props;
		dispatch(tryGetAdviceIfNeeded());
    dispatch(selectNavigationItem(initNavigationState.fourthNavItem.index));
	}

  render() {
    const { adviceId } = this.props.match.params;
    const { advice } = this.props;

    return (
      <MainContentContainer>
        <Section block='singleAdvice'>
          <Advice 
            advice={advice[adviceId]}
          />
        </Section>
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;
  const { advice } = app;

  return {
    advice
  };
};

export default withRouter(connect(mapStateToProps)(SingleAdviceContainer));