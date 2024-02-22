import { FlatList, View, StyleSheet } from "react-native";
import categories from "../data/categories.json";
import CateogryItem from "./CategoryItem";
import { colors } from '../global/colors';

function Categories ({navigation}) {
    return (
        <View style={styles.container}>
            <FlatList
            data = {categories}
            renderItem = {({item}) => (<CateogryItem navigation={navigation} category = {item}/>)}
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