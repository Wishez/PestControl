import React, { Component } from 'react';
import Logo from './Logo';
import NavContainer from './../containers/NavContainer.js'; 
import { Container, Image } from 'semantic-ui-react';
import Paragraph from './Paragraph';
const Header = ({
  getVisibilitySwitchButtonClasses,
  isOpenMakeOrderForm: isOpen,
  openMakeOrderForm,
  closeMakeOrderForm
}) => (
  <header className='header'
    id='header'>
      <Container>
        <Logo />
        <NavContainer />
        <Paragraph block='header' 
        	text='Дизенсекция против постояльцев, поселившихся в вашем доме без вашего согласия. 
        	Мы предлагаем вам <span class="header__paragraph--color_skyBlue">чистокристаллическую, 
        	качественную</span> зачистку, вместе с гарантией на 1 год.'/>
        <Image className='header__figure header__figure--name_man'
           src='/static/pest_control/img/man.png' />
          
        <Image className={getVisibilitySwitchButtonClasses(isOpen)}
          onClick={openMakeOrderForm }
          src='/static/pest_control/img/order_button.png' />
      </Container>
  </header>
);

export default Header;