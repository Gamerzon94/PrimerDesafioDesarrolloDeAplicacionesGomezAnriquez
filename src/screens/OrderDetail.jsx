import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import OrderItemDetail from "../components/OrderItemDetail";

const OrderDetail = ({ route }) => {
  const { order } = route.params; 

  const calculateTotal = () => {
    return order.items.reduce(
      (acc, currentItem) => (acc += currentItem.quantity * currentItem.price),
      0
    ).toFixed(2);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Detalles de la orden</Text>
        <Text>Fecha: {new Date(order.createdAt).toLocaleString()}</Text>
        <Text>Total: ${calculateTotal()}</Text>
        <Text>Productos:</Text>
        {order.items.map((item, index) => (
          <View key={index} style={styles.item}>
            <OrderItemDetail item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginBottom: 115,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
});
