import PRODUCTS from '../../data/dummy-data.js';

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(current => current.ownerId === 'u1')
};

const productsReducer = (state = initialState, action) => {
    return state;
};

export default productsReducer;