import { SELECT_NAVIGATION_ITEM, CLEAN_ACTIVE_STATE } from './../constants/navigationTypes.js';
import { 
  closeOrderCallbackForm, 
  closeMakeOrderForm 
} from './../actions/appActions.js';


const selectNavigationItem = navigationItem => ({
	type: SELECT_NAVIGATION_ITEM,
	navigationItem
});

export const cleanActiveState = () => ({
	type: CLEAN_ACTIVE_STATE
});


export const closeFormsAndSelectNavigationItem = navigationItem => dispatch => {
	dispatch(selectNavigationItem(navigationItem));
	dispatch(closeOrderCallbackForm());
	dispatch(closeMakeOrderForm());
};