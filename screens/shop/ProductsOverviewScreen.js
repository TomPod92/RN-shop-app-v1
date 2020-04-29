import React from 'react';
import { StyleSheet, View, Text, FlatList, Button, Platform } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { addToCart } from '../../redux/actions/cartActions.js';
import ProductItem from '../../components/shop/ProductItem.js';
import CustomHeaderButton from '../../components/UI/HeaderButton.js';
import colors from '../../constants/colors.js';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    // const handleViewDetails = (product) => props.navigation.navigate('ProductDetail', { productId: itemData.item.id, productTitle: itemData.item.title });
    const handleViewDetails = (product) => props.navigation.navigate('ProductDetail', { productId: product.id, productTitle: product.title });

    const handleAddToCart = (product) => dispatch(addToCart(product))

    return (
        <FlatList 
            data={products} 
            keyExtractor={item => item.id} 
            renderItem={itemData => (
                <ProductItem 
                    product={itemData.item}
                    // handleViewDetails={() => props.navigation.navigate('ProductDetail', { productId: itemData.item.id, productTitle: itemData.item.title })} 
                    onSelect={() => handleViewDetails(itemData.item)}
                >
                    <Button title="View Details" color={colors.primary} onPress={() => handleViewDetails(itemData.item)}/>
                    <Button title="Add to Cart" color={colors.primary} onPress={() => handleAddToCart(itemData.item)}/>
                </ProductItem>
            )}
        />
    );
};

ProductsOverviewScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'All products',
        headerLeft: (
            (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item title="Menu" iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'} onPress={() => {navData.navigation.toggleDrawer()}} />
                </HeaderButtons>
            )
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item title="Cart" iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'} onPress={() => {navData.navigation.navigate("Cart")}} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProductsOverviewScreen;