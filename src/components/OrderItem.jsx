import { StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { colors } from '../global/colors';

const OrderItem = ({ item }) => {
        const total = item.items.reduce(
        (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
        0
    );
    
    return (
        <View style={styles.card} onPress={()=>{}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{new Date(item.createdAt).toLocaleString()}</Text>
                <Text style={styles.text2}>{total}</Text>
            </View>
            <Feather name="search" size={30} color="black" />
        </View>
        );
    };
    
export default OrderItem;

const styles = StyleSheet.create({
    card:{
        flex: 1,
        height: 100,
        backgroundColor: colors.card,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textContainer:{
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    text:{
        fontFamily: 'HindBold',
        fontSize: 17,
        color: "black"
    },
    text2:{
        fontFamily: 'HindRegular',
        fontSize: 19,
        color: "black"
    }
})