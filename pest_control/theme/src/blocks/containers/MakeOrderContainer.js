import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import MakeOrderForm from './../components/MakeOrderForm';
import { tryMakeOrder, closeMakeOrderForm, getServices } from './../actions/appActions.js';


class MakeOrderContainer extends Component  {

	static PropTypes = {
		isOpened: PropTypes.bool.isRequired,
		isOrdered: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		this.props.dispatch(getServices());
	}

	componentDidUpdate() {
		if (this.props.isOpened)
			$(':input[type="tel"]').mask('+7 (000) 000-00-00');
			
	}
	onSubmitMakeOrderForm =(values, dispatch) => {
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
		const { isOpened } = this.props;
		return (
			<Container className='main__makeOrderFormContainer'>
				{isOpened ?
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
		isOrderOrdered,
		services
	} = app;

	return {
		message: makeOrderFormMessage,
		isOpened: isMakeOrderFormOpened,
		isOrdered: isOrderOrdered,
		services
	};
};

export default withRouter(connect(mapStateToProps)(MakeOrderContainer));