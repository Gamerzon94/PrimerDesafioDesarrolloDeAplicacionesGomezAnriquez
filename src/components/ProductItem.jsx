import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import Card from "./Card";

const ProductItem = ({product, setProductDetailId}) => {
    const { width, height } = useWindowDimensions();
    return (
        <>
            <Pressable onPress={() => setProductDetailId(product.id)}>
                <Card style={{marginVertical : 5, marginLeft : 10, marginRight : 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style = {width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
                    <Image style = {styles.image} source={{uri: product.images[0]}} />
                </Card>
            </Pressable>
            
        </>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
    text : {
        fontSize : 25,
        fontFamily : 'HindRegular',
        marginLeft: 10,
    },
    textMin: {
        fontSize: 15,
        fontFamily: 'HindRegular',
        marginLeft: 10,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 15,
        marginRight: 10,
    }
});