import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../../components/UI/HeaderButton.js';
import OrderItem from '../../components/shop/OrderItem.js';

const OrdersScreen = () => {
    const orders = useSelector(state => state.orders.orders);
    console.log(orders)
    return (
        <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => <OrderItem order={itemData.item}/>}/>
    );
}

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Orders',
        headerLeft: (
            (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {navData.navigation.toggleDrawer()}} />
                </HeaderButtons>
            )
        ),

    }
}

const styles = StyleSheet.create({

})
 
export default OrdersScreen;
