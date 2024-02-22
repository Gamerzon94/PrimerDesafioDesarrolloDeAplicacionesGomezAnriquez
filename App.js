import { useState } from "react";
import { useFonts } from 'expo-font';
import { fonts } from "./src/global/fonts";
import Navigator from "./src/navigation/Navigator";

export default function App() {
  const [categorySelected, setCategorySelected] = useState('');

  const [productDetailId, setProductDetailId] = useState(0);

  const [fontsLoaded] = useFonts(fonts);

  if (!fontsLoaded) {
    return null;
  }

  return <Navigator />;
}