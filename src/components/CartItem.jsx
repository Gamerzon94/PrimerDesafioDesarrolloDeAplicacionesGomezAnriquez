import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';
import { Entypo } from '@expo/vector-icons';

const CartItem = ({item}) => {
  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>{item.brand}</Text>
            <Text style={styles.text2}>{item.price}</Text>
        </View>
        <Entypo name="trash" size={30} color="black" />
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        felx: 1,
        height: 100,
        backgroundColor: colors.card,
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },
    textContainer:{
        width: '70%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    text:{
        fontFamily: 'HindBold',
        fontSize: 19,
        color: "black",
    },
    text2:{
        fontFamily: 'HindRegular',
        fontSize: 14,
        color: "black",
    }
})