import React, { Component } from 'react';
import MakeOrderForm from './../components/MakeOrderForm';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import classNames from 'classnames';

class MakeOrderContainer extends Component  {

	submit(values, dispatch) {
		
		// values.service = $(':input[name="service"]').val();

		// const data = {
		// 	"name": values.name,
		// 	"phone": $(':input[name="phone"]').val(),
		// 	"email": values.email,
		// 	"service": $(':input[name="service"]').val(),
		// 	"comment": values.comment
		// };

		// $.ajaxSetup({
		// 	url: '/order/',
		// 	type: 'POST',
		// 	data: data,
		// 	beforeSend(xhr, settings) {
		// 		crossDomainRequest(xhr, settings, this);
		// 	}
		// });

		// $.ajax({
		// 	success: (respond) => {
		// 		$('#orderForm').hide();
		// 		$('.orderFormWrapper').append(respond);
		// 		$('.connect').css('max-height', '1280px')
		// 	},
		// 	error: (xhr, errmsg, err) => {
		// 		console.log('fail\n',errmsg,  err);

		// 	}

		// });
	}
	getClasses = (name, modifier) => (
    	classNames({
	      	[name]: true,
	      	[`${name}--${modifier}`]: !!modifier
    	})
  	)
	render() {	
		return (
			<MakeOrderForm getClasses={this.getClasses} />
		);
	}
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps)(MakeOrderContainer));