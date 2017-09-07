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
            <th className='serviceTabsTableHeader__cell'>Площадь</th>
            <th className='serviceTabsTableHeader__cell'>Цена</th>
            <th className='serviceTabsTableHeader__cell'>Гарантия</th>
          </tr>
        </thead>
        <tbody>
          {spaces.map(space=> (
            <tr key={space.id}
              className='serviceTabsTableData'>
              <th className='serviceTabsTableData__cell'>{space.space_name}</th>
              <th className='serviceTabsTableData__cell serviceTabsTableData__cell--name_price'>{`${space.price}₽`}</th>
              <th className='serviceTabsTableData__cell'>{space.ensure}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  );
};

export default Tabs;