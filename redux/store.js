import {createStore, combineReducers} from 'redux';

import productsReducer from './reducers/productsReducer.js';
import cartReducer from './reducers/cartReducer.js';
import ordersReducer from './reducers/ordersReducer.js';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    orders: ordersReducer
});

export default rootReducer;