import { ADD_ORDER } from '../types.js';

import Order from '../../models/orderModel.js';

const initialState = {
    orders: []
};

const ordersReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ORDER:
            const newOrder = new Order(
                new Date().toString(),
                action.cartItems,
                action.totalAmount,
                new Date()
            );
            
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
        default:
            return state
    }
};

export default ordersReducer;