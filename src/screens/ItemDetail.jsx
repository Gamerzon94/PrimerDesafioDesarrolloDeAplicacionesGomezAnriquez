import { StyleSheet, Text, View, Pressable, useWindowDimensions } from 'react-native'
import {useEffect, useState} from 'react'
import Header from "../components/Header";
import allProducts from '../data/products.json';
import { colors } from '../../src/global/colors';

const ItemDetail = ({productDetailId, category, setCategorySelected, setProductDetailId}) => {
    const [product, setProduct] = useState({});

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        const productFinded = allProducts.find(
            (product) => product.id === productDetailId
        );
        setProduct(productFinded);
    }, [productDetailId]);

    const goBack = () => {
        setProductDetailId(0);
    }

    return product ? (
        <View>
            <Header title = {category} />
            <Text>{product.title}</Text>
            <Pressable onPress = {goBack}>  
                <Text style={styles.backButton}>Volver</Text>
            </Pressable>
        </View>
    ) : (
        <View>
            <Header title = {category} />
            <Pressable onPress = {goBack}>  
                <Text style={styles.backButton}>Volver</Text>
            </Pressable>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
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
})