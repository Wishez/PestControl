import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MakeOrderContainer from './../containers/MakeOrderContainer';
import OrderCallbackContainer from './../containers/OrderCallbackContainer';

const MainContentContainer = ({
	children
}) => (
	<main id='main'
        className='main'>
        <OrderCallbackContainer />
		<MakeOrderContainer />
		{children}
	</main>
);


export default MainContentContainer;