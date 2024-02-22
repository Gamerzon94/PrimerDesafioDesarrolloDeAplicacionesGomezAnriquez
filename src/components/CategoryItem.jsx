import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CateogryItem = ({category, navigation}) => {
    return (
        <>
            <Card style={{marginVertical : 5, marginLeft : 10, marginRight : 10}}>
                <Pressable onPress = {() => navigation.navigate("ItemListCategories",{category})}>
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