import { FlatList, StyleSheet , View, Text, Pressable, useWindowDimensions } from "react-native";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { colors } from '../../src/global/colors';
import { useSelector } from "react-redux";
import { useGetProductsByCategoryQuery } from "../services/shopService";

function ItemListCategories ({navigation, route}) {

    const [products, setProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const category = useSelector((state) => state.shopReducer.value.categorySelected);
    const { data: productsFilteredByCategory, isLoading, error } = useGetProductsByCategoryQuery(category);

    useEffect(() => {
        if (productsFilteredByCategory) {
            const productsRaw = Object.values(productsFilteredByCategory)
            const productsFiltered = productsRaw.filter((product) =>
                product.title.includes(keyword)
            );
            setProducts(productsFiltered);
        }
    }, [productsFilteredByCategory, keyword]);

    return (
        <View style={styles.container}>
            <Search onSearch={setKeyword} />
            <FlatList
            data= {products}
            renderItem={({item}) => <ProductItem product={item} category={category} navigation={navigation} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{paddingBottom: 320}}
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