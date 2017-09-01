import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import MakeOrderContainer from './../containers/MakeOrderContainer.js';

const MainContentContainer = ({
	children
}) => (
	<Container className='main__container'>
		<MakeOrderContainer />
		{children}
	</Container>
);

const mapStateToProps = state => ({});

export default MainContentContainer;