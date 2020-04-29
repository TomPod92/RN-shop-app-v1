import { DELETE_PRODUCT } from '../types.js';

export const deleteProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        productId
    }
};