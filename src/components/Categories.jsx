import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from '../global/colors';
import Counter from "./Counter";
import { useSelector } from "react-redux";

function Categories ({navigation}) {
    const categories = useSelector((state) => state.shopReducer.value.categories);
    return (
        <View style={styles.container}>
            <Counter />
            <FlatList
            data = {categories}
            renderItem = {({item}) => (<CategoryItem navigation={navigation} category = {item}/>)}
            keyExtractor={(category) => category}
            contentContainerStyle={{paddingBottom: 320}}
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