import { createStore, applyMiddleware} from 'redux';
import cakeReducer from './cake/cakeReducer';
import apiReducer from './apiCall/apiReducer';
import { combineReducers } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import usersReducer from './users/usersReducer';
import thunk from 'redux-thunk';

// export const storeApi = createStore(cakeReducer);

const rootReducer = combineReducers({
    cake: cakeReducer,
    team : apiReducer,
    users : usersReducer
})
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));


export default store;

