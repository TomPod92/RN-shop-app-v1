import { ADD_TO_CART } from '../types.js';
import CartItem from '../../models/cart-item.js';

const initialState = {
    items: {},
    totalAmount: 0
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const productPrice = addedProduct.price;
            const productTitle = addedProduct.title;

            let itemToAdd;
            
            if(state.items[addedProduct.id]) {
                // przedmiot znajduje się już w koszyku
                itemToAdd = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    productPrice,
                    productTitle,
                    state.items[addedProduct.id].sum + productPrice,
                );
            } else {
                // dodaj nowy przedmiot do koszyka
                itemToAdd = new CartItem(1, productPrice, productTitle, productPrice);
            }

            return {
                ...state,
                items: {...state.items, [addedProduct.id]: itemToAdd},
                totalAmount: state.totalAmount + productPrice
            }
    }
    return state;
};

export default cartReducer;