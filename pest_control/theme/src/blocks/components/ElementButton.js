import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames'

const ElementButton = ({
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
	<button type='button'
        className={getClasses(block, modifier)}
        id={id ? id : ''}>
        <a className={`${block}Refer`} 
          	href={href ? href : '#'}
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
      </a>
    </button>
);

export default  ElementButton;