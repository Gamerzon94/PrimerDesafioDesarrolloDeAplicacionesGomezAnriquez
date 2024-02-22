import { FlatList, StyleSheet , View, Text, Pressable, useWindowDimensions } from "react-native";
import Header from "../components/Header";
import allProducts from '../data/products.json';
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { colors } from '../../src/global/colors';

function ItemListCategories ({navigation, route}) {
    const {category} = route.params;
    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if(category){
            const products = allProducts.filter((product) => product.category === category);
            const filteredProducts = products.filter((product) => 
                product.title.toLowerCase().includes(keyword.toLowerCase()));
            setProducts(filteredProducts);
        }else{
            const filteredProducts = allProducts.filter((product) => 
                product.title.toLowerCase().includes(keyword.toLowerCase()));
                setProducts(filteredProducts);
        }
    }, [category, keyword]);

    return (
        <View style={styles.container}>
            <Search onSearch={setKeyword} />
            <FlatList
            data= {products}
            renderItem={({item}) => <ProductItem product={item} category={category} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            />
        </View>
    );
}

export default ItemListCategories;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backButton: {
        fontSize: 20,
        fontFamily: 'HindRegular',
        textAlign: 'center',
        marginVertical: 10,
        backgroundColor: colors.footer,
        borderRadius: 10,
        padding: 10,
        width: '20%',
        alignSelf: 'center',
    }
});