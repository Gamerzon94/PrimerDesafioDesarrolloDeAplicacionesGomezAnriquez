import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    increment,
    decrement,
    incrementByAmount,
    reset,
  } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { colors } from '../../src/global/colors';

const Counter = ({ count, setCount }) => {

    const dispatch = useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.buttonsContainer}>
                <Pressable  onPress={()=> dispatch(decrement())} style={styles.button}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>
                <Text style={styles.contador}>{count}</Text>
                <Pressable onPress={() => {
                    dispatch(increment());
                    setCount(count + 1);
                }} style={styles.button}>
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