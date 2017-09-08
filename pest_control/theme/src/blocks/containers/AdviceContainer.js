import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 
import Section from './../components/Section';
import AdviceList from './../components/AdviceList';
import Title from './../components/Title';
import { tryGetAdviceIfNeeded } from './../actions/appActions.js';

class AdviceContainer extends Component {

  static PropTypes = {
    dispatch: PropTypes.func.isRequired,
    advice: PropTypes.array.isRequired
  }
  
	componentDidMount() {
		this.props.dispatch(tryGetAdviceIfNeeded());
	}

  render() {
    const { advice } = this.props;

    return (
      <MainContentContainer>
        <Section 
          block='adviceIntro'
          image='advice_man.png'
          paragraphText='Мы хотим рассказать вам о хорошей практике
          для предотвращения распространения в вашем
          доме разных паразитов.'>
        </Section>
        <Section block='advice'>
          <Title block='advice' 
            text='Советы' />
          <AdviceList 
            adviceList={advice} />
        </Section>
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => {
  const { app } = state;
  const { advice } = app;
  console.log(advice);
  return {
    advice: Object.assign([], advice)  
  };
};

export default withRouter(connect(mapStateToProps)(AdviceContainer));