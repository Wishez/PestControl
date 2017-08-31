import { SELECT_NAVIGATION_ITEM, navigationItems } from './../constants/navigationTypes.js';


// Объект описывающий состояние навигации.
// Его можно настраивать.
export const initNavigationState = {
	firstNavItem: {
		active: false,
		name: navigationItems.home
	},
	secondNavItem: {
		active: false,
		name: navigationItems.services
	},
	thirdNavItem: {
		active: false,
		name: navigationItems.contacts
	},
	fourthNavItem: {
		active: false,
		name: navigationItems.isistutions
	},
	fifthNavItem: {
		active: false,
		name: navigationItems.advice
	}
};

const navigation = (
	state=initNavigationState,
	action
) => {
	switch (action.type) {
		case SELECT_NAVIGATION_ITEM:
			return  {
				...initNavigationState,
				[action.navigationItem]: {
					...state[action.navigationItem],
					active: true
				}
			};
		default:
			return state;
	}
};

export default navigation;