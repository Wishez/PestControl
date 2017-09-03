import {
	OPEN_MAKE_ORDER_FORM,
	CLOSE_MAKE_ORDER_FORM,
	MAKE_ORDER,
	ORDER_CALLBACK,
	OPEN_ORDER_CALLBACK_FORM,
	CLOSE_ORDER_CALLBACK_FORM,
	ASK_AGAIN,
	ASK_QUESTION
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

const actionHandler = (
	data,
	url,
	action
) => {
	customAjaxRequest({
		url,
		data,
		type: 'POST',
		processData: true,
		cache: true
	});

	return $.ajax({
		success: respond => {
			dispatch(action(true, respond));
		},
		error: (xhr, errmsg, err) => {
			dispatch(action(false, 'Внутренняя ошибка сервера'));
		}
	});	
};

export const tryToMakeOrder = data => dispatch => {
	return actionHandler(data, '/make_order/', makeOrder);
	// customAjaxRequest({
	// 	url: '/make_order/',
	// 	data,
	// 	type: 'POST',
	// 	processData: true,
	// 	cache: true
	// });

	// return $.ajax({
	// 	success: respond => {
	// 		dispatch(makeOrder(true, respond));
	// 	},
	// 	error: (xhr, errmsg, err) => {
	// 		dispatch(makeOrder(false, 'Внутренняя ошибка сервера'));
	// 	}
	// });
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
	return actionHandler(data, '/order_callback/', orderCallback);
	// customAjaxRequest({
	// 	url: '/order_callback/',
	// 	data,
	// 	type: 'POST',
	// 	processData: true,
	// 	cache: true
	// });

	// return $.ajax({
	// 	success: respond => {
	// 		dispatch(orderCallback(true, respond));
	// 	},
	// 	error: (xhr, errmsg, err) => {
	// 		dispatch(orderCallback(false, 'Внутренняя ошибка сервера'));
	// 	}
	// });
};


export const askQuestionAgain = () => ({
	type: ASK_AGAIN
});

const askQuestion = (
	isQestionAsked,
	message
) => ({
	type: ASK_QUESTION,
	message,
	isQestionAsked
});

export const tryAskQuestion = data => dispatch => {
	return actionHandler(data, '/ask_question/', askQuestion);
	// customAjaxRequest({
	// 	url: '/ask_question/',
	// 	data,
	// 	type: 'POST',
	// 	processData: true,
	// 	cache: true
	// });

	// return $.ajax({
	// 	success: respond => {
	// 		dispatch(askQuestion(true, respond));
	// 	},
	// 	error: (xhr, errmsg, err) => {
	// 		dispatch(askQuestion(false, 'Внутренняя ошибка сервера'));
	// 	}
	// });
}