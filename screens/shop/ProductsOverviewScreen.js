import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { addToCart } from '../../redux/actions/cartActions.js';
import ProductItem from '../../components/shop/ProductItem.js';

const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();

    const handleViewDetails = (product) => props.navigation.navigate('ProductDetail', { productId: itemData.item.id, productTitle: itemData.item.title });

    const handleAddToCart = (product) => dispatch(addToCart(product))

    return (
        <FlatList 
            data={products} 
            keyExtractor={item => item.id} 
            renderItem={itemData => (
                <ProductItem 
                    product={itemData.item}
                    handleViewDetails={() => props.navigation.navigate('ProductDetail', { productId: itemData.item.id, productTitle: itemData.item.title })} 
                    handleAddToCart={() => handleAddToCart(itemData.item)}
                />
            )}
        />
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All products'
}

const styles = StyleSheet.create({
    screen: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ProductsOverviewScreen;