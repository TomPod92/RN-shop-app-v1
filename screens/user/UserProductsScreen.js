import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View, Text, FlatList, Button, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { deleteProduct } from '../../redux/actions/productsActions.js';
import CustomHeaderButton from '../../components/UI/HeaderButton.js';
import ProductItem from '../../components/shop/ProductItem.js';
import colors from '../../constants/colors.js';

const UserProductsScreen = (props) => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();

    const handleDeleteItem = (productId) => dispatch(deleteProduct(productId))

    return (
        <FlatList 
            data={userProducts} 
            keyExtractor={item => item.id} 
            renderItem={itemData => (
                <ProductItem 
                    product={itemData.item}
                    onSelect={() => {}}
                >
                    <Button title="Edit" color={colors.primary} onPress={() => {}}/>
                    <Button title="Delete" color={colors.primary} onPress={() => handleDeleteItem(itemData.item.id)}/>
                </ProductItem>
            )} 
        />
    )
}

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your Products",
        headerLeft: (
            (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {navData.navigation.toggleDrawer()}} />
                </HeaderButtons>
            )
        ),
        // headerRight: (
        //     <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        //         <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {navData.navigation.navigate("Cart")}} />
        //     </HeaderButtons>
        // )
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default UserProductsScreen;
