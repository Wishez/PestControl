import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import MakeOrderForm from './../components/MakeOrderForm';
import { tryMakeOrder, closeMakeOrderForm } from './../actions/appActions.js';


class MakeOrderContainer extends Component  {

	static PropTypes = {
		isOpen: PropTypes.bool.isRequired,
		isOrdered: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	onSubmitMakeOrderForm(values, dispatch) {
		dispatch(tryMakeOrder(values));
	}

	getClasses = (name, modifier) => (
    	classNames({
	      	[name]: true,
	      	[`${name}--${modifier}`]: !!modifier
    	})
  	)
  	closeOrderForm = () => {
    	const { dispatch } = this.props;

    	dispatch(closeMakeOrderForm());
  	}

	render() {	
		const { isOpen } = this.props;
		return (
			<Container className='main__makeOrderFormContainer'>
				{isOpen ?
					<MakeOrderForm {...this.props}
						onSubmitMakeOrderForm={this.onSubmitMakeOrderForm}
						getClasses={this.getClasses}
						closeMakeOrderForm={this.closeOrderForm} /> :
					''
				}	
			</Container>
		);
	}
}

const mapStateToProps = state => {
	const {
		app
	} = state;
	
	const {
		isMakeOrderFormOpened,
		makeOrderFormMessage,
		isOrderOrdered
	} = app;

	return {
		message: makeOrderFormMessage,
		isOpen: isMakeOrderFormOpened,
		isOrdered: isOrderOrdered
	};
};

export default withRouter(connect(mapStateToProps)(MakeOrderContainer));