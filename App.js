import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
import { colors } from './src/global/colors';
import ItemListCategories from './src/screens/ItemListCategories';
import { useState } from "react";
import { useFonts } from 'expo-font';
import { fonts } from "./src/global/fonts";
import ItemDetail from './src/screens/ItemDetail';

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');

  const [productDetailId, setProductDetailId] = useState(0);

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <StatusBar style="auto" />
      {
        productDetailId ? 
        <ItemDetail 
          category={categorySelected} 
          productDetailId={productDetailId} 
          setCategorySelected={setCategorySelected} 
          setProductDetailId={setProductDetailId}
        />
        : 
        categorySelected ?
        <ItemListCategories 
          setCategorySelected={setCategorySelected} 
          category={categorySelected} 
          setProductDetailId={setProductDetailId} />
        :
        <Home setCategorySelected={setCategorySelected} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.body,
    paddingTop: Constants.statusBarHeight,
  }
});