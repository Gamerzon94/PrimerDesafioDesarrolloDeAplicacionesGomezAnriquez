import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { removeItem } from '../features/shop/cartSlice';

const CartItem = ({item}) => {

    const dispatch = useDispatch();

    const onRemoveCart = () => {
        dispatch(removeItem({...item}))
    }

  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>Marca: {item.brand}</Text>
            <Text style={styles.text2}>Categoria: {item.category}</Text>
            <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
            <Text style={styles.text2}>Precio unitario: ${item.price}</Text>
        </View>
        <Pressable onPress={onRemoveCart}>
            <Entypo name="trash" size={30} color="black" />
        </Pressable>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    card:{
        felx: 1,
        height: 150,
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