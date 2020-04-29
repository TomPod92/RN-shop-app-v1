import PRODUCTS from '../../data/dummy-data.js';
import { DELETE_PRODUCT } from '../types.js';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(current => current.ownerId === 'u1')
};

const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(current => current.id !== action.productId),
                availableProducts: state.availableProducts.filter(current => current.id !== action.productId)
            }
        // ----------------------------------------------------------------------------
        // ----------------------------------------------------------------------------
        default:
            return state
    }
};

export default productsReducer;