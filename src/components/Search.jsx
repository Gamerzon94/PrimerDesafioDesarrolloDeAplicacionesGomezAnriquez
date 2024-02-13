import { useState } from "react";
import { StyleSheet, Pressable, TextInput, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";

const Search = ({onSearch}) => {
    const [input, setInput] = useState("");

    const handleSearch = () => {
        if (input) {
            onSearch(input);
        }
    };

    const removeInput = () => {
        setInput("");
    };


    return (
        <View style = {styles.container} >
            <View style={styles.inputContainer}>
                <TextInput 
                style = {styles.input} 
                onChangeText = {setInput} 
                value={input} 
                placeholder = {'Buscar producto'}
                />
                <Pressable onPress={handleSearch}>
                    <AntDesign name="search1" size={25} color="black" />
                </Pressable>
                <Pressable onPress={removeInput}>
                    <Entypo name="circle-with-cross" size={25} color="black" />
                </Pressable>
            </View>
        </View>
    );
}

export default Search;

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : 10,
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
        paddingTop: 10,
    },
    input : {
        borderRadius: 8,
        padding: 10,
        borderWidth: 1,
        width: "80%",
        fontSize: 20,
    },
    icon : {
        marginLeft : -35,
    }
});