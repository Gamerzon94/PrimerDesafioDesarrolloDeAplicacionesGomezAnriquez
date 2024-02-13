import { FlatList, View, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CateogryItem from "./CategoryItem";
import { colors } from '../global/colors';

function Categories () {
    return (
        <View style={styles.container}>
            <FlatList
            data = {categories}
            renderItem = {({item}) => (<CateogryItem category = {item}/>)}
            keyExtractor={(category) => category}
            />
        </View>
    );
}

export default Categories;

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.body,
    }
});