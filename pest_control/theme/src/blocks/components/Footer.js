import React, { Component } from 'react';
import { Icon, Container, Image } from 'semantic-ui-react';
import Title from './Title';

const Footer = ({
  tel,
  email
}) => (
  <footer className='footer'> 
    <Container> 
      <Title block='footer'
        text='Ждём вас круглосуточно' />
      <ul className='footerContacts'>
        <li className='footerContactsItem'>
          <a href={`tel:${tel}`}
             className='footerContactsItem__refer'>
            <Icon name='phone sign'
              size='large'
              className='footerContacts__icon' />
            <span>&nbsp;{tel}</span>
          </a>
        </li>
        <li className='footerContactsItem'>
          <a href={`mailto:${email}`}
            className='footerContactsItem__refer'>
            <Icon name='envelope'
              size='large'
              className='footerContacts__icon' />
            &nbsp;<span>{email}</span>
          </a>
        </li>
      </ul>
      <p className='copyright'>
          &copy;&nbsp;2017&nbsp;&mdash;&nbsp;"Pest Control"
      </p>
      <Image className='footer__figure' 
        src='/static/pest_control/img/operator.png' />
    </Container>
  </footer>
);

export default Footer;