import {createStore} from 'redux';
import cakeReducer from './cake/cakeReducer';
import apiReducer from './apiCall/apiReducer';

export const storeApi = createStore(cakeReducer);
const store = createStore(apiReducer);


export default store;