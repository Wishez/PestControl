import {
	OPEN_MAKE_ORDER_FORM,
	CLOSE_MAKE_ORDER_FORM,
	MAKE_ORDER,
	ORDER_CALLBACK,
	OPEN_ORDER_CALLBACK_FORM,
	CLOSE_ORDER_CALLBACK_FORM,
	ASK_AGAIN,
	ASK_QUESTION,
	GET_SERVICES,
	GET_ADVICE,
	CHOOSE_OPTION,
	CHOOSE_SERVICE
}  from './../constants/actionTypes.js';
import customAjaxRequest from './../constants/ajax.js'


export const chooseService = index => ({
	type: CHOOSE_SERVICE,
	index
})

export const chooseOption = index => ({
	type: CHOOSE_OPTION,
	index
});



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
) => dispatch => {
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

export const tryMakeOrder = data => dispatch => {
	console.log(data);
	dispatch(actionHandler(data, '/make_order/', makeOrder));
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
	console.log(data);
	dispatch(actionHandler(data, '/order_callback/', orderCallback));
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
	console.log(data);
	dispatch(actionHandler(data, '/ask_question/', askQuestion));
}



const fetchData = (url, actionCreater) => dispatch => (
	fetch(url)
		.then(resp => (
			resp.json()
		))
		.then(data => {
			dispatch(actionCreater(data));
		})
		.catch(err => {
			console.log('Didn\'t get data', err);
		})
);

const accumulateData = array => (
	array.reduce((acumulatedData, element) => (
		{	
			...acumulatedData,
			[element.id]: element
		}
	), {})
);

const getServices = data => ({
	type: GET_SERVICES,
	data: accumulateData(data)
});

const checkServicesDataState = state => {
	const {
		app
	} = state;

	const {
		services
	} = app;

	if (services)
		return true;
	else
		return false;
}

export const tryGetServicesIfNeeded = () => (dispatch, getState) => {
	if (checkServicesDataState(getState()))
		dispatch(fetchData('/api/v0/services/', getServices));
};

const getAdvice = data => ({
	type: GET_ADVICE,
	data: accumulateData(data)
});

const checkAdviceDataState = state => {
	const {
		app
	} = state;

	const {
		advice
	} = app;

	if (advice)
		return true;
	else
		return false;
};

export const tryGetAdviceIfNeeded = () => dispatch => {
	if (checkAdviceDataState(getState()))
		dispatch(fetchData('/api/v0/advice/', getServices));
};


