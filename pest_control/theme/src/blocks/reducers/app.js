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

const initState = {
	isMakeOrderFormOpened: false,
	makeOrderFormMessage: '',
	isOrderOrdered: false,
	isOrderCallbackFormOpened: false,
	isCallbackOrdered: false,
	orderCallbackFormMessage: '',
	isQuestionAsked: false,
	askQuestionsFormMessage: '',
	services: {},
	advice: {},
	optionId: 0,
	serviceId: 0
}

const app = (
	state=initState,
	action
) => {
	switch (action.type) {
		case OPEN_MAKE_ORDER_FORM:
			return {
				...state,
				isMakeOrderFormOpened: true
			};
		case CLOSE_MAKE_ORDER_FORM:
			return {
				...state,
				isMakeOrderFormOpened: false
			};
		case MAKE_ORDER:
			return {
				...state,
				makeOrderFormMessage: action.message,
				isOrderOrdered: action.isOrdered
			};
		case ORDER_CALLBACK:
			return {
				...state,
				orderCallbackFormMessage: action.message,
				isCallbackOrdered: action.isOrdered
			};
		case OPEN_ORDER_CALLBACK_FORM:
			return {
				...state,
				isOrderCallbackFormOpened: true
			};
		case CLOSE_ORDER_CALLBACK_FORM:
			return {
				...state,
				isOrderCallbackFormOpened: false
			};

		case ASK_AGAIN:
			return {
				...state,
				isQuestionAsked: false,
				askQuestionsFormMessage: ''	
			};
		case ASK_QUESTION:
			return {
				...state,
				isQuestionAsked: action.isQuestionAsked,
				askQuestionsFormMessage: action.message	
			};
		case GET_SERVICES:
			return {
				...state,
				services: action.data
			};
		case GET_ADVICE:
			return {
				...state,
				advice: action.data
			};
		case CHOOSE_OPTION:
			return {
				...state,
				optionId: action.index	
			};
		case CHOOSE_SERVICE:
			return {
				...state,
				serviceId: action.index
			}
		default:
			return state;
	}
};

export default app;