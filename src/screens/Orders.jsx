import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import OrderItem from '../components/OrderItem';
import { useGetOrdersByUserQuery } from '../services/shopService';
import { useSelector } from 'react-redux';

const Orders = () => {
  const { localId } = useSelector((state) => state.authReducer.value);
  const { data: orders, error, isLoading } = useGetOrdersByUserQuery(localId);
  if (isLoading) return <Text>Cargando...</Text>;
  if (error) console.log(error);
  
  return (
    <View>
      <FlatList
      data={Object.values(orders)}
      keyExtractor={(item) => item.createdAt.toString()}
      renderItem={({ item }) => <OrderItem item={item} />}
      contentContainerStyle={{paddingBottom: 320}}
      />
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({})