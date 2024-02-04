import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable } from 'react-native';
import cartLogo from './assets/cart.png'
import jcjLogo from './assets/JC_Jenson_Logo.png'

const DATA = [
  {
    id: 1,
    name : "Lápiz JCJenson",
  },
  {
    id: 2,
    name : "Servicio de transporte",
  },
  {
    id: 3,
    name : "Colonias espaciales",
  },
  {
    id: 4,
    name : "Dron especialista en niños",
  },
  {
    id: 5,
    name : "Dron de reparaciones",
  },
  {
    id: 6,
    name : "Dron de servidumbre",
  },
  {
    id: 7,
    name : "Dron sin entrenamiento",
  },
  {
    id: 8,
    name : "Dron de seguridad",
  },
  {
    id: 9,
    name : "Centinela",
  },

]

export default function App() {

  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState(DATA);
  const [cartItems, setCartItems] = useState([]);

  const addItem = () => {
    let maxId = 0;
    for(let i = 0; i<items.length; i++){
      maxId = items[i].id;
    }
    const newItem = {
      name : inputValue,
      id: maxId+1
    }
    setItems([...items, newItem])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={jcjLogo} /> 
        <Image style={{width: 50, height: 50}} source={cartLogo} /> 
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder = 'Ingrese un nuevo producto' style={styles.filtro}
        value={inputValue} onChangeText={setInputValue}/>
        <Pressable onPress={addItem}>
          <Text style={{fontSize: 30}}>+</Text>
        </Pressable>
      </View>
      <View>
        <FlatList 
          data={items}
          renderItem={({ item }) => (
            <View style={styles.itemList}>
              <Text style={styles.products}>{item.name}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    gap: 8, 
    alignItems: 'center'
  },
  itemList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  products: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 4
  },
  filtro: {
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    width: '90%'
  }
});
