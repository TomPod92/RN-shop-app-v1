import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

import CartItem from '../../components/shop/CartItem.js';
import { removeFromCart } from '../../redux/actions/cartActions.js';
import { addOrder } from '../../redux/actions/ordersActions.js';
import colors from '../../constants/colors.js';

const CartScreen = () => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const dispatch = useDispatch()

    const cartItems = useSelector(state => {
        const cartItemsArray = [];
        for(const key in state.cart.items) {
            cartItemsArray.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum,
            })
        }

        return cartItemsArray.sort((a, b) => a.productId > b.productId ? 1 : -1);
    });

    const handleAddOrder = () => {
        dispatch(addOrder(cartItems, cartTotalAmount));
    }

    return (
        <View style={styles.screen}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>Total: <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text></Text>
                <Button title="Order Now" color={colors.accent} disabled={cartItems.length === 0} onPress={handleAddOrder}/>
            </View>
            <FlatList 
                data={cartItems} 
                keyExtractor={item => item.productId} 
                renderItem={itemData => <CartItem product={itemData.item} deletable={true} handleRemove={() => dispatch(removeFromCart(itemData.item.productId))} />}
            />
        </View>
    );
};

CartScreen.navigationOptions = {
    headerTitle: 'Your Cart'
}


const styles = StyleSheet.create({
    screen: {
        margin: 20,

    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18,
    },
    amount: {
        color: colors.primary,
    },
});
 
export default CartScreen;