import {createStore, combineReducers} from 'redux';

import productsReducer from './reducers/productsReducer.js';
import cartReducer from './reducers/cartReducer.js'

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;