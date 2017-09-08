import React from 'react';
import { Link } from 'react-router-dom';

import Title from './Title'; 

const AdviceList = ({
	adviceList
}) => (
	<ul className='adviceList'>
		{adviceList.map(advice => (
			<li key={advice.id}
				className='adviceListItem'>
				<Title block='adviceListItem' 
					text={advice.advice_title} />
				<Link to={`/advice/${advice.id}`}
					className='adviceListItem__refer' />	
			</li>
		))}
	</ul>

);

export default AdviceList;