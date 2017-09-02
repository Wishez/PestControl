import {
	OPEN_MAKE_ORDER_FORM,
	CLOSE_MAKE_ORDER_FORM,
	MAKE_ORDER
}  from './../constants/actionTypes.js';

const initState = {
	isOpenMakeOrderForm: false,
	makeOrderFormMessage: '',
	isOrdered: false
}

const app = (
	state=initState,
	action
) => {
	switch (action.type) {
		case OPEN_MAKE_ORDER_FORM:
			return {
				...state,
				isOpenMakeOrderForm: true
			};
		case CLOSE_MAKE_ORDER_FORM:
			return {
				...state,
				isOpenMakeOrderForm: false
			};
		case MAKE_ORDER:
			return {
				...state,
				makeOrderFormMessage: action.message,
				isOrdered: action.isOrdered
			};
		default:
			return state;
	}
};

export default app;