import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import classNames from 'classnames'
	    
const NavItem = ({
	block, 
	href,
	iconName,
	isImage,
	number,
	name,
	id,
	modifier,
}) =>  {
	const getClasses = (name, modifier) => (
	    classNames({
	      [name]: true,
	      [`${name}--${modifier}`]: !!modifier
	    })
	);

	return (  
	  <Link to={href}
	    className={`${block}Refer`}>
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
	);
}

export default NavItem;