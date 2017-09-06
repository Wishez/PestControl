import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import OrderCallbackForm from './../components/OrderCallbackForm';
import { tryOrderCallback, closeOrderCallbackForm } from './../actions/appActions.js';


class OrderCallbackContainer extends Component  {

	static PropTypes = {
		isOpened: PropTypes.bool.isRequired,
		isOrdered: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired
	}
	

	componentDidUpdate() {
		if (this.props.isOpened)
			$(':input[type="tel"]').mask('+7 (000) 000-00-00');		
	}

	onSubmitOrderCallbackForm = (values, dispatch) => {
		dispatch(tryOrderCallback(values));
	}

	getClasses = (name, modifier) => (
    	classNames({
	      	[name]: true,
	      	[`${name}--${modifier}`]: !!modifier
    	})
  	)

  	closeCallbackForm = () => {
    	const { dispatch } = this.props;

    	dispatch(closeOrderCallbackForm());
  	}
  

	render() {	
		const { isOpened } = this.props;
		return (
			<div>
			{isOpened ?
				<OrderCallbackForm {...this.props}
					getClasses={this.getClasses}
					onSubmitOrderCallbackForm={this.onSubmitOrderCallbackForm}
					closeOrderCallbackForm={this.closeCallbackForm} /> :
				''
			}	
			</div>
		);
	}
}

const mapStateToProps = state => {
	const {
		app
	} = state;
	
	const {
		isOrderCallbackFormOpened,
		orderCallbackMessage,
		isCallbackOrdered
	} = app;

	return {
		message: orderCallbackMessage,
		isOpened: isOrderCallbackFormOpened,
		isOrdered: isCallbackOrdered
	};
};

export default withRouter(connect(mapStateToProps)(OrderCallbackContainer));