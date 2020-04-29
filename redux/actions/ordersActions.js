import { ADD_ORDER } from '../types.js';

export const addOrder = (cartItems, totalAmount) => {
    return {
        type: ADD_ORDER,
        cartItems,
        totalAmount
    }
}