import {createStore} from 'redux';
import cakeReducer from './cake/cakeReducer';
import apiReducer from './apiCall/apiReducer';
import { combineReducers } from 'redux';

// export const storeApi = createStore(cakeReducer);

const rootReducer = combineReducers({
    cake: cakeReducer,
    team : apiReducer
})
const store = createStore(rootReducer);


export default store;

