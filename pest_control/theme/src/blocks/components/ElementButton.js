import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import classNames from 'classnames';

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
  type
}) => {
   const getClasses = (name, modifier) => (
    classNames({
      [name]: true,
      [`${name}--${modifier}`]: !!modifier
    })
  );
   
  return ( <button type={type ? type : 'button'}
          className={getClasses(block, modifier)}
          id={id ? id : ''}>
        {href ?
            <a className={`${block}Refer`} 
            href={href}
            onClick={onClick ? onClick : () => {}}>
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
          </a> :
          <div className={`${block}Container`} 
            onClick={onClick}>
            {isImage ?
                <Image src={`/static/pest_control/img/${iconName}`}
                  className={getClasses(`${block}Container__icon`, modifier)} /> :
                <Icon name={iconName} 
                  size='large'
                  className={getClasses(`${block}Container__icon`, modifier)} />
            }
             <span className={getClasses(`${block}Container__number`, modifier)}>{number}</span>
             <br/>
             <span className={getClasses(`${block}Container__name`, modifier)}>{name}</span>
          </div>
        }

      </button>
  );
}

export default  ElementButton;