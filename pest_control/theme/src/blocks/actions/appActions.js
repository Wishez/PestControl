import {
	OPEN_MAKE_ORDER_FORM,
	CLOSE_MAKE_ORDER_FORM,
	MAKE_ORDER
}  from './../constants/actionTypes.js';
import customAjaxRequest from './../constants/ajax.js'


export const openMakeOrderForm = () => ({
	type: OPEN_MAKE_ORDER_FORM
});

export const closeMakeOrderForm = () => ({
	type: CLOSE_MAKE_ORDER_FORM
});

const makeOrder = (
	message,
	isOrdered
) => ({
	type: MAKE_ORDER,
	message,
	isOrdered
});


export const tryToMakeOrder = data => dispatch => {
	customAjaxRequest({
		url: '/makeOrder/',
		data,
		type: 'POST',
		processData: true,
		cache: true
	});

	return $.ajax({
		success: respond => {
			dispatch(makeOrder(true, respond));
		},
		error: (xhr, errmsg, err) => {
			dispatch(makeOrder(false, 'Внутренняя ошибка сервера'));
		}
	})
}