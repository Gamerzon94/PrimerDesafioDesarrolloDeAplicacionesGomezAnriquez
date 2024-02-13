import { Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const CateogryItem = ({category, setCategorySelected}) => {
    return (
        <>
            <Card style={{marginVertical : 5, marginLeft : 10, marginRight : 10}}>
                <Pressable onPress = {() => setCategorySelected(category)}>
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