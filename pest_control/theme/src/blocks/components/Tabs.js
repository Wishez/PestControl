import React, { Component } from 'react';
import classNames from 'classnames';

import Paragraph from './Paragraph';

const Tabs = ({
  options,
  spaces,
  chooseOption,
  optionId
}) => {
  const getActiveClasses = (block, isActive) => (
    classNames({
      [block]: true,
      [`${block}--active`]: isActive
    })
  );
  const getClasses = (block, modifier) => (
    classNames({
      [block]: true,
      [`${block}--${modifier}`]: !!modifier
    })
  );

  return (
    <div className='serviceTabs'>
      <nav className='serviceTabs__navigation'>
        <ul className='serviceTabsNavigationList'>
        {options.map((option, index) => (
          <li key={option.id}
            className={getActiveClasses(
                  'serviceTabsNavigationList__item',
                  (index === optionId)
                )}
            onClick={chooseOption(index)}>
            {option.option_name}
          </li>
        ))}
        </ul>
      </nav>    
      <table className='serviceTabs__table'>
        <thead >
          <tr className='serviceTabsTableHeader'>
            <th className={getClasses('serviceTabsTableHeader__cell', 'name_space')}>Площадь</th>
            <th className={getClasses('serviceTabsTableHeader__cell', 'name_price')}>Цена</th>
            <th className={getClasses('serviceTabsTableHeader__cell', 'name_ensure')}>Гарантия</th>
          </tr>
        </thead>
        <tbody>
          {spaces.map(space=> (
            <tr key={space.id}
              className='serviceTabsTableData'>
              <th className={getClasses('serviceTabsTableData__cell', 'name_space')}>{space.space_name}</th>
              <th className={getClasses('serviceTabsTableData__cell', 'name_price')}>{`${space.price}₽`}</th>
              <th className={getClasses('serviceTabsTableData__cell', 'name_ensure')}>{space.ensure}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Tabs;