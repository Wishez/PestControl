import { SELECT_NAVIGATION_ITEM, navigationItems } from './../constants/navigationTypes.js';


// Объект описывающий состояние навигации.
// Его можно настраивать.
export const initNavigationState = {
	firstNavItem: {
		active: false,
		name: navigationItems.home,
		index: 'firstNavItem',
		icon: 'home',
		pathTo: '/'
	},
	secondNavItem: {
		active: false,
		name: navigationItems.services,
		index: 'secondNavItem',
		icon: 'suitcase',
		pathTo: '/services'
	},
	thirdNavItem: {
		active: false,
		name: navigationItems.contacts,
		index: 'thirdNavItem',
		icon: 'book',
		pathTo: '/contacts'
	},
	fourthNavItem: {
		active: false,
		name: navigationItems.advice,
		index: 'fourthNavItem',
		icon: 'hand peace',
		pathTo: '/advice'
	}
	// fifthNavItem: {
	// 	active: false,
	// 	name: navigationItems.isistutions,
	// 	index: 'fifthNavItem',
	// 	icon: 'users',
	// 	pathTo: '/isistutions'
	// }
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