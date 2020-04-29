import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';


const ProductItem = (props) => {
    let TouchableCmp = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }
    return (

        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{uri: props.product.imageUrl}}/>
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.product.title}</Text>
                            <Text style={styles.price}>${props.product.price.toFixed(2)}</Text>
                        </View>
                        <View style={styles.actions}>
                            {props.children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
        paddingBottom: 15,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {height: 2, width: 0},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        overflow: 'hidden'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        alignItems: 'center',
        height: '25%',
        padding: 10
    },
    title: {
        fontSize: 18, 
        marginVertical: 2,
        fontFamily: 'open-sans-bold'
    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'open-sans'
    },
    actions: {
        height: '15%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
 
export default ProductItem;