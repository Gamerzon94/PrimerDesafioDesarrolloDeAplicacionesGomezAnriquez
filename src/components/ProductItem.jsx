import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const ProductItem = ({product}) => {
    return (
        <>
            <Card style={{marginVertical : 5, marginLeft : 10, marginRight : 10}}>
                <Text style = {styles.text}>{product.title}</Text>
            </Card>
            
        </>
    );
}

export default ProductItem;

const styles = StyleSheet.create({
    text : {
        fontSize : 25,
        fontFamily : 'HindRegular',
    }
});