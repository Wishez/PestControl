import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

import MakeOrderForm from './../components/MakeOrderForm';
import { 
	tryMakeOrder,
	closeMakeOrderForm, 
	tryGetServicesIfNeeded,
	chooseService 
} from './../actions/appActions.js';


class MakeOrderContainer extends Component  {

	static PropTypes = {
		isOpened: PropTypes.bool.isRequired,
		isOrdered: PropTypes.bool.isRequired,
		message: PropTypes.string.isRequired,
		dispatch: PropTypes.func.isRequired,
		serviceId: PropTypes.number.isRequired,
		services: PropTypes.object.isRequired
	}

	componentDidMount() {
		this.props.dispatch(tryGetServicesIfNeeded());
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
  	// Возвращает список площадок, которые обрабатываются конкретной услугой.
  	getServiceSpacesList = (services, serviceId) => (
  		services[serviceId].options.reduce((bunchSpaces, option) => (
  			[	
  				...bunchSpaces,
  				...option.spaces.map(space => (
  					{
  						key: space.id,
  						value: space.id,
  						text: space.space_name
  					}
  				))
  			]
  		), [])
  	)
  	// Возвращает список услуг для низпадающего списка.
  	getServicesList = services => (
  		services.reduce((bunchServices, service) => (
  			[
  				...bunchServices,
  				{
  					key: service.id,
  					value: service.id,
  					text: service.service_name
  				}
  			]
  		), [])
  	)

  	chooseService = index => {
  		this.props.dispatch(chooseService(index));
  	}


	render() {	
		const { 
			isOpened,
			serviceId,
			services,
			message
		} = this.props;

		return (
			<Container className='main__makeOrderFormContainer'>
				{isOpened ?
					<MakeOrderForm {...this.props}
						onSubmitMakeOrderForm={this.onSubmitMakeOrderForm}
						getClasses={this.getClasses}
						closeMakeOrderForm={this.closeOrderForm}
						servicesList={this.getServicesList(Object.assign([], services))}
						serviceSpacesList={serviceId ? this.getServiceSpacesList(services, serviceId) : []} 
						onChangeChoosenService={this.chooseService} /> :
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
		services,
		serviceId
	} = app;

	return {
		message: makeOrderFormMessage,
		isOpened: isMakeOrderFormOpened,
		isOrdered: isOrderOrdered,
		services,
		serviceId
	};
};

export default withRouter(connect(mapStateToProps)(MakeOrderContainer));