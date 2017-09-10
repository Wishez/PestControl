import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import MainContentContainer from './../components/MainContentContainer'; 
import Section from './../components/Section';
import { selectNavigationItem } from './../actions/navigationActions.js';
import { initNavigationState } from './../reducers/navigation.js';

class PresentContainer extends Component {

  static PropTypes = {
    match: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }
  
	componentDidMount() {
		const { dispatch } = this.props;
    dispatch(selectNavigationItem(initNavigationState.firstNavItem.index));
	}

  render() {
    return (
      <MainContentContainer>
        <Section block='present' 
          image='best_choice.png'
          paragraphText='В каждом доме есть <strong>паразиты</strong>. 
          Они регулярно заселяются, поэтому вам может потребоваться <strong>избавится</strong> от них. 
          В таких ситуациях вы обращаетесь к таким профессиональным ребятам, как мы, <strong>эффективно выполняющие</strong> всю "грязную работу".'
          />
        <Section block='ordering' 
          image='with_resperator.png'
          paragraphText='Заказать избавление от паразитов просто. 
            Нажмите на кнопку <a href="#header" class="smoothRise">“Заказать зачистку”</a> в верху страницы и заполните форму. 
            После этого, наш оператор перезвонит вам и утвердит вашу заявку, 
            пока мы будем подготавливать оборудование.'/>
      </MainContentContainer>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(PresentContainer);