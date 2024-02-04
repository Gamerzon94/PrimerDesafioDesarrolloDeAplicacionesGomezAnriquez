import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Pressable, TouchableOpacity } from 'react-native';
import cartLogo from './assets/cart.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>JCJenson</Text>
        <Image style={{width: 50, height: 50}} source={cartLogo} /> 
      </View>
      <View style={{flexDirection: 'row'}}>
        <TextInput placeholder = 'Filtrar por categoria' style={styles.filtro}/>
        <TouchableOpacity>
          <Text style={{fontSize: 13}}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.itemList}>
        <Text style={styles.products}>Articulos de oficina</Text>
        <Text style={styles.products}>Transporte</Text>
        <Text style={styles.products}>Servicios Espaciales</Text>
        <Text style={styles.products}>Drones de oficina</Text>
        <Text style={styles.products}>Drones para el hogar</Text>
        <Text style={styles.products}>Drones para el servicio de Seguridad</Text>
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
