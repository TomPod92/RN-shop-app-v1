import React from 'react';
import { createStackNavigator, createDrawerNavigator, createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen.js';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen.js';
import OrderScreen from '../screens/shop/OrdersScreen.js';
import UserProductsScreen from '../screens/user/UserProductsScreen.js';
import EditProductScreen from '../screens/user/EditProductScreen.js';
import colors from '../constants/colors.js';

const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colors.primary : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary
}

//--------------------------------------------------------------------------------
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? "md-cart" : "ios-cart"} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});
//--------------------------------------------------------------------------------
const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? "md-list" : "ios-list"} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});
//--------------------------------------------------------------------------------
const AdminNavigator = createStackNavigator({
    UserProducts: UserProductsScreen,
    EditProduct: EditProductScreen,
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Ionicons name={Platform.OS === 'android' ? "md-create" : "ios-create"} size={23} color={drawerConfig.tintColor}/>
    },
    defaultNavigationOptions: defaultNavOptions
});
//--------------------------------------------------------------------------------
const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: AdminNavigator,
}, {
    contentOptions: {
        activeTintColor: colors.primary
    }
});

export default createAppContainer(ShopNavigator);