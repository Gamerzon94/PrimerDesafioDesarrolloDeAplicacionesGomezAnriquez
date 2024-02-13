import { StyleSheet, Text, View } from "react-native";
import Card from "./Card";

const CateogryItem = ({category}) => {
    return (
        <>
            <Card style={{paddingTop : 20}}>
                <Text style = {styles.text}>{category}</Text>
            </Card>
        </>
    );
}

export default CateogryItem;

const styles = StyleSheet.create({
    text : {
        fontSize : 25,
    }
});