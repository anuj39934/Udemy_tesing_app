import {CHANGE_AUTH} from '../actions/types';

export default function authenticate(state = false, action) {
	debugger;
	switch(action.type){
		case CHANGE_AUTH :
			return action.payload;
	}
	return state;
}