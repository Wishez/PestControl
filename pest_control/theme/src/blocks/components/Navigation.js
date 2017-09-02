import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ElementButton from './ElementButton';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
// <Icon name={secondNI.icon} 
//                   size='large'
//                   className='NavItemRefer__icon' />
            
//                 <span className='NavItemRefer__number'>{secondNI.number}</span>
//                <br/>
//                // <span className='NavItemRefer__name'>{secondNI.name}</span>
const Navigation = ({
    navigationItems,
    openMenu,
    changeActiveNavigationItem,
    closeMenu,
    smoothRise,
    getActiveClasses,
    ...rest
}) => {
  // Nav Items
  // const firstNI = navigationItems[0];
  // const secondNI = navigationItems[1];
  // const thirdNI = navigationItems[2];
  // const fourthNI = navigationItems[3];
  // const fifthNI = navigationItems[4];
  navigationItems.forEach((item) => {
    console.log(item.active);
  })
  return (
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
              onClick={e => {
                  changeActiveNavigationItem(item.index);
                  // e.preventDefault();
                }} 
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
}
  
   // <Link to='/'>Home</Link>
   //        <Link to='/services'>Services</Link>
   //        <Link to='/contacts'>Contacts</Link>
   //        <Link to='/insistutions'>Insistutions</Link>
   //        <Link to='/advice'>Advice</Link>

// { navigationItems.map((item, index) => (
//             <li key={index}
//               className={getActiveClasses(item.active)}>    
//               <NavItem
//                 block='navItem'
//                 onClick={() => {
//                   changeActiveNavigationItem(item.index);
//                 }} 
//                 iconName={item.icon}
//                 number={index + 1}
//                 href={item.pathTo}
//                 name={item.name}
//                 {...rest}
//               />

//             </li>
//           ))}
export default Navigation;

// <NavItem
//             block='navItem'
//             onClick={() => {
//               changeActiveNavigationItem(firstNI.index);
//             }} 
//             iconName={firstNI.icon}
//             number='1'
//             href={firstNI.pathTo}
//             name={firstNI.name}
//             active={firstNI.active}
//             {...rest}
//           /> 
//           <NavItem
//             block='navItem'
//             onClick={() => {
//               changeActiveNavigationItem(secondNI.index);
//             }} 
//             iconName={secondNI.icon}
//             number='2'
//             href={secondNI.pathTo}
//             name={secondNI.name}
//             active={secondNI.active}
//             {...rest}
//           />
//           <NavItem
//             block='navItem'
//             onClick={e => {
//               changeActiveNavigationItem(thirdNI.index);
//               e.preventDefault();
//             }} 
//             iconName={thirdNI.icon}
//             number='3'
//             href={thirdNI.pathTo}
//             name={thirdNI.name}
//             active={thirdNI.active}
//             {...rest}
//           /> 
//           <NavItem
//             block='navItem'
//             onClick={() => {
//               changeActiveNavigationItem(fourthNI.index);
//               e.preventDefault();
//             }} 
//             iconName={fourthNI.icon}
//             number='4'
//             href={fourthNI.pathTo}
//             name={fourthNI.name}
//             active={fourthNI.active}
//             {...rest}
//           />
//           <NavItem
//             block='navItem'
//             onClick={() => {
//               changeActiveNavigationItem(fifthNI.index);
//             }} 
//             iconName={fifthNI.icon}
//             number='5'
//             href={fifthNI.pathTo}
//             name={fifthNI.name}
//             active={fifthNI.active}
//             {...rest}
//           />
