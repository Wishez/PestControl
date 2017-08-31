import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const Navigation = ({
    firstNavItem,
    secondNavItem,
    thirdNavItem,
    fourthNavItem,
    fifthNavItem,
    openMenu,
    changeActiveNavigationItem,
    closeMenu,
    getActiveClasses
}) => (
    <nav className={`navigation`}>
      <button id='openMenuButton'
        className='navigation__openMenuButton visible-xs'
        onClick={openMenu}>
        <Icon name='bars' size='big' />

      </button>
      <ul className='navList'
          id='navList'>
        <Icon id='closeMenuButton'
          className='navigation__closeMenuButton'
          name='close'
          size='big'
          onClick={closeMenu} />
        
        <li className={getActiveClasses(firstNavItem.active)}>
          <Link to='/'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('firstNavItem');
            }}>
            <Icon className='navItem__refer--icon'
              name='home'
              size='large'
            />
            <span className='navItem__refer--number'>1</span>
            <br/>
            <span className='navItem__refer--name'>{firstNavItem.name}</span>
          </Link>
        </li>
        <li className={getActiveClasses(secondNavItem.active)}>
          <Link to='/services'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('secondNavItem');
            }}>
            <Icon className='navItem__refer--icon'
              name='book'
              size='large'
            />
            <span className='navItem__refer--number'>2</span>
            <br/>
            <span className='navItem__refer--name'>{secondNavItem.name}</span>
          </Link>
        </li>
        <li className={getActiveClasses(thirdNavItem.active)}>
          <Link to='/contacts' 
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('thirdNavItem');
            }}>
            <Icon className='navItem__refer--icon'
              name='book address'
              size='large'
            />
            <span className='navItem__refer--number'>3</span>
            <br/>
            <span className='navItem__refer--name'>{thirdNavItem.name}</span>
          </Link>
        </li>
        <li className={getActiveClasses(fourthNavItem.active)}>
          <Link to='/institutions'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('fourthNavItem');
            }}>
            <Icon className='navItem__refer--icon'
              name='users'
              size='large'
            />
            <span className='navItem__refer--number'>4</span>
            <br/>
            <span className='navItem__refer--name'>{fourthNavItem.name}</span>
          </Link>
        </li>
        <li className={getActiveClasses(fifthNavItem.active)}>
          <Link to='/advice'
            className='navItem__refer'
            onClick={() => {
              changeActiveNavigationItem('fifthNavItem');
            }}>
            <Icon className='navItem__refer--icon'
              name='hand peace'
              size='large'
            />
            <span className='navItem__refer--number'>5</span>
            <br/>
            <span className='navItem__refer--name'>{fifthNavItem.name}</span>
          </Link>
        </li>
      </ul>
    </nav>
);

export default Navigation;