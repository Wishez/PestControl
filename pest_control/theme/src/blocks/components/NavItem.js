import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames'
import { Link } from 'react-router-dom';

const NavItem = ({
	onClick,
	block, 
	href,
	iconName,
	isImage,
	number,
	name,
	id,
	modifier,
	getClasses
}) => (

  <Link to={href}
    className={`${block}Refer`}
    onClick={onClick}>
    {isImage ?
	   		<Image src={`/static/pest_control/img/${iconName}`}
    		className={getClasses(`${block}Refer__icon`, modifier)} /> :
    	<Icon name={iconName} 
    		size='large'
    		className={getClasses(`${block}Refer__icon`, modifier)} />
	}
    <span className={getClasses(`${block}Refer__number`, modifier)}>{number}</span>
   <br/>
   <span className={getClasses(`${block}Refer__name`, modifier)}>{name}</span>
  </Link>
)

export default NavItem;