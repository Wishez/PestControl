import {
	OPEN_MAKE_ORDER_FORM,
	CLOSE_MAKE_ORDER_FORM,
	MAKE_ORDER,
	ORDER_CALLBACK,
	OPEN_ORDER_CALLBACK_FORM,
	CLOSE_ORDER_CALLBACK_FORM
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
		url: '/make_order/',
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
	});
}

export const openOrderCallbackForm = () => ({
	type: OPEN_ORDER_CALLBACK_FORM
});

export const closeOrderCallbackForm = () => ({
	type: CLOSE_ORDER_CALLBACK_FORM
});

const orderCallback = (
	message,
	isOrdered
) => ({
	type: ORDER_CALLBACK,
	message,
	isOrdered
});

export const tryOrderCallback = data => dispatch => {
	customAjaxRequest({
		url: '/order_callback/',
		data,
		type: 'POST',
		processData: true,
		cache: true
	});

	return $.ajax({
		success: respond => {
			dispatch(orderCallback(true, respond));
		},
		error: (xhr, errmsg, err) => {
			dispatch(orderCallback(false, 'Внутренняя ошибка сервера'));
		}
	});
};