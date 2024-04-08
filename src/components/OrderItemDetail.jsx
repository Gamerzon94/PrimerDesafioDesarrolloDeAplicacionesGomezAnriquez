import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors';

const OrderItemDetail = ({item}) => {

  return (
    <View style={styles.card} onPress={() => {}}>
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.text2}>Marca: {item.brand}</Text>
            <Text style={styles.text2}>Categoria: {item.category}</Text>
            <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
            <Text style={styles.text2}>Precio unitario: ${item.price}</Text>
        </View>
    </View>
  )
}

export default OrderItemDetail

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