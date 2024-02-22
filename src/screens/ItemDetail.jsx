import { StyleSheet, Text, View, Pressable, useWindowDimensions, Image } from 'react-native'
import {useEffect, useState} from 'react'
import Header from "../components/Header";
import allProducts from '../data/products.json';
import { colors } from '../../src/global/colors';
import AnimatedLoader from 'react-native-animated-loader';
import Swiper from 'react-native-swiper';

const ItemDetail = ({navigation, route}) => {
    const [product, setProduct] = useState({});

    const {id} = route.params;

    const {category} = route.params;

    const { width, height } = useWindowDimensions();

    useEffect(() => {
        const productFinded = allProducts.find(
            (product) => product.id === id
        );
        setProduct(productFinded);
    }, [id]);

    return product ? (
        <View style={styles.container}>
            <View style={styles.producto}>
                <Text style={styles.titulo}>{product.title}</Text>
                {product.images && product.images[0] && (
                    <Image style={styles.image} source={{ uri: product.images[0] }} />
                )}
                <Text style={styles.textoDescriptivo}>Marca: {product.brand}</Text>
                <Text style={styles.textoDescriptivo}>Descripción: {product.description}</Text>
                <Text style={styles.textoDescriptivo}>Descuento: {product.discountPercentage}%</Text>
                <Text style={styles.textoDescriptivo}>Precio: ${product.price}</Text>
                <Text style={styles.textoDescriptivo}>Stock: {product.stock}</Text>
            </View>
        </View>
    ) : (
        <View>
            <Header title = {category} />
            <AnimatedLoader
                visible={true}
                overlayColor="rgba(255,255,255,0.75)"
                source={require("../../assets/Animation.json")}
                animationStyle={{width: 100, height: 100}}
                speed={1}
            />
            <Pressable onPress = {goBack}>  
                <Text style={styles.backButton}>Volver</Text>
            </Pressable>
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },producto: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.footer,
        marginVertical: 10,
        borderRadius: 10,
        padding: 10,
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10,
    },titulo: {
        fontSize: 25,
        fontFamily: 'HindBold',
        marginTop: 10,
    },textoDescriptivo:{
        fontSize: 20,
        fontFamily: 'HindRegular',
        textAlign: 'center',
    },image:{
        width:200, 
        height:200,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
    },backButton: {
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