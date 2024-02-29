import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import orders from "../data/orders.json";
import OrderItem from '../components/OrderItem';

const Orders = () => {
  return (
    <View>
      <FlatList
      data={orders}
      keyExtractor={(order) => order.id}
      renderItem={({ item }) => <OrderItem item={item} />}
      contentContainerStyle={{paddingBottom: 320}}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})