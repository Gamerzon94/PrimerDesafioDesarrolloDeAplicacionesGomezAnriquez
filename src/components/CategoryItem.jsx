import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";

const CateogryItem = ({category, navigation}) => {
    const dispatch = useDispatch()

    return (
        <>
            <Card style={{marginVertical : 5, marginLeft : 10, marginRight : 10}}>
                <Pressable onPress = {() => {
                    dispatch(setCategorySelected(category))
                    navigation.navigate("ItemListCategories",{category});
                    }}
                >
                    <Text style = {styles.text}>{category}</Text>
                </Pressable>
            </Card>
        </>
    );
}

export default CateogryItem;

const styles = StyleSheet.create({
    text : {
        fontSize : 25,
        fontFamily : 'HindRegular',
    }
});