import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CartComplete = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gracias por su Compra!</Text>
    </View>
  )
}

export default CartComplete

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
})