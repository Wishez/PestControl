import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MakeOrderContainer from './../containers/MakeOrderContainer.js';

const MainContentContainer = ({
	children
}) => (
	<main id='main'
        className='main'>
		<MakeOrderContainer />
		{children}
	</main>
);


export default MainContentContainer;