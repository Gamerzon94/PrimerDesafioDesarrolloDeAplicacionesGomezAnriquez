import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CompleteProduct = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Producto agregado al carrito!</Text>
    </View>
  )
}

export default CompleteProduct

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