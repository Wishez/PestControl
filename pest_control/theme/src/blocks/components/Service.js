import React from 'react';

import Section from './Section';
import Title from './Title';
import { Link } from 'react-router-dom';
import ElementButton from './ElementButton';
import Tabs from './Tabs';

const Service = ({ 
	service,
	openMakeOrderForm,
	...rest
}) => (	
	<Section 
		block='service'
		paragraphText={service.service_description}>
		<Title block='service'
			text={service.service_name} />
		<Tabs options={service.options}
			{...rest} />
		<ElementButton 
			block='serviceMakeOrderButton'
			iconName='setting'
			name='Заказать'
			number='8'
			onClick={openMakeOrderForm}
		/>
		<Link to='/services'
			className='service__referToAllServices'>
		 	Вернуться ко всем услугам
		</Link>
	</Section>
);

export default Service;