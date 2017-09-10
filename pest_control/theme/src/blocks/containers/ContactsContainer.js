import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 
import Section from './../components/Section';
import ElementButton from './../components/ElementButton';
import AskQuestionsForm from './../components/AskQuestionsForm';
import { 
  tryAskQuestion,
  askQuestionAgain,
  openOrderCallbackForm
} from './../actions/appActions.js'
import { selectNavigationItem } from './../actions/navigationActions.js';
import { initNavigationState } from './../reducers/navigation.js';

class ContactsContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    isQuestionAsked: PropTypes.bool.isRequired
  } 

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(selectNavigationItem(initNavigationState.thirdNavItem.index));
  }
  
  onSubmitAskQuestionsForm = (values, dispatch) => {
    dispatch(tryAskQuestion(values));
  }
  askAgain = () => {
    this.props.dispatch(askQuestionAgain())
  }


  render() {

    const tel = '+7 (926) 370-78-12';
    return (
      <MainContentContainer>
        <Section block='callback'
          image='call_me.png'
          paragraphText={`Если вас что-то интересует, 
          мы с радостью проконсультируем вас по телефону:<br /><br />
          <a class="callback__paragraph--color_darkGray" href="tel:${tel}"><strong>${tel}</strong></a><br /><br />
          Или вы можете попросить нас перезвонить вам`}>
            <ElementButton 
              iconName='phone.png'
              isImage={true}
              number='7'
              block='callbackButton'
              onClick={() => {
                this.props.dispatch(openOrderCallbackForm());
              }}
              name='Заказать звонок'
            />
        </Section>
        <Section block='askQuestions'
            image='ask.png'>
            <AskQuestionsForm
              onSubmitAskQuestionsForm={this.onSubmitAskQuestionsForm}
              askQuestionAgain={this.askAgain}
              {...this.props}  />
        </Section>
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => {
  const {
    app
  } = state;
  
  const {
    askQuestionsFormMessage,
    isQuestionAsked
  } = app;
  
  return {
    message: askQuestionsFormMessage,
    isQuestionAsked 
  };
};

export default withRouter(connect(mapStateToProps)(ContactsContainer));