import { ADD_TO_CART } from '../types.js';

export const addToCart = product => {
    return {
        type: ADD_TO_CART,
        product
    }
};