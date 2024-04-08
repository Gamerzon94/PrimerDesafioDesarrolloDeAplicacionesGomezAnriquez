import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { increment, decrement } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";
import { colors } from '../../src/global/colors';

const Counter = ({ count, setCount, maxCount }) => {

    const dispatch = useDispatch();
    const incrementCount = () => {
        if (count < maxCount) {
            setCount(count + 1);
        }
    };
    
    const decrementCount = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable  onPress={decrementCount} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.contador}>{count}</Text>
                <Pressable onPress={incrementCount} style={styles.button}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginBottom: 10,
    },
    button: {
        padding: 20,
        backgroundColor: colors.header,
    },
    span: {
        width: "43%",
        padding: 10,
        textAlign: "center",
        fontSize: 20,
        fontFamily: "HindRegular",
    },
    spanInput: {
        width: "43%",
        padding: 10,
        textAlign: "center",
        fontSize: 16,
        fontFamily: "HindRegular",
    },
    buttonText: {
        fontSize: 18,
        fontFamily: "HindRegular",
        color: "white",
    },
    contador: {
        fontSize: 20,
        fontFamily: "HindRegular",
        marginHorizontal: 20,
    },
  });