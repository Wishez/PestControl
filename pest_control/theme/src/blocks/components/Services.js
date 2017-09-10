import React from 'react';
import Section from './Section';
import Title from './Title';
import { Link } from 'react-router-dom';

const Services = ({ 
	services
}) => (	
	<Section image='service.png'
		block='services'
		paragraphText='Больше подробностей об интересующей 
			вас услуге можно узнать <strong>кликнув</strong> на одну 
			из услуг.'>
		<Title block='services'
			text='Перечень услуг' />
		
		<ul className='servicesList'>
			{services.map((service, index) => (
				<li key={index}
					className='servicesItem'>
					<Link to={`/services/${service.id}`}
						className='servicesItem__refer'>
						{service.service_name}
					</Link>
				</li>
			))}
		</ul>
	</Section>
);

export default Services;