import { FlatList, View, StyleSheet } from "react-native";
import CategoryItem from "./CategoryItem";
import { colors } from '../global/colors';
import Counter from "./Counter";
import { useGetCategoriesQuery } from "../services/shopService";

function Categories ({navigation}) {
    
    const {data, isLoading, error} = useGetCategoriesQuery();

    return (
        <View style={styles.container}>
            <Counter />
            <FlatList
            data = {data}
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