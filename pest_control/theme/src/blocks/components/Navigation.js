import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ElementButton from './ElementButton';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';

const Navigation = ({
    navigationItems,
    openMenu,
    changeActiveNavigationItem,
    closeMenu,
    smoothRise,
    getActiveClasses,
    ...rest
}) => (
   <nav className={`navigation`}>
    <button id='openMenuButton'
      className='navigation__openMenuButton visible-xs'
      onClick={openMenu}>
      <Icon name='bars' size='big' />
    </button>
    <aside className='navigation__asideButtons' id='asideButtons'>
      <ElementButton 
        block='orderCallbackButton'
        isImage={true}
        iconName='phone.png'
        number='7'
        name='Обратный звонок'
        modifier='aside'
        {...rest}
      />
      <br />
      <ElementButton 
        href='#header'
        id='upButton'
        block='upButton'
        isImage={true}
        onClick={smoothRise}
        iconName='rocket.png'
        number='6'
        name='Наверх' 
        modifier='aside'
        {...rest}
      />
      
    </aside>
    <ul className='navList'
        id='navList'>
        <Icon id='closeMenuButton'
          className='navigation__closeMenuButton'
          name='close'
          size='big'
          onClick={closeMenu} />
        { navigationItems.map((item, index) => (
            <li className={getActiveClasses(item.active)} 
              key={index}
              onClick={changeActiveNavigationItem(item.index)} 
            >  
              <NavItem
                block='navItem'
                iconName={item.icon}
                number={index + 1}
                href={item.pathTo}
                name={item.name}
                isActive={item.active}
                {...rest}
              />
            </li>
          ))}

      </ul>
    </nav>
  );
  

export default Navigation;
