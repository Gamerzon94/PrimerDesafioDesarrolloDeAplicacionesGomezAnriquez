import { FlatList, StyleSheet, Text, View, Pressable } from 'react-native'
import { resetCart } from '../features/shop/cartSlice';
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import { usePostOrderMutation } from "../services/shopService";
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation();
    const navigation = useNavigation(); 
    

    const dispatch = useDispatch();

    const confirmCart = ()=> {
        triggerPost({ total, cartItems, user: "loggedUser"});
        dispatch(resetCart());
        navigation.navigate("CartComplete");
    }

    return (
        <View>
            {cartItems.length > 0 ? (
                <>
                    <FlatList
                        data={cartItems}
                        renderItem={({ item }) => <CartItem item={item} />}
                        keyExtractor={(cartItem) => cartItem.id}
                        contentContainerStyle={{paddingBottom: 320}}
                    />
                    <Text>Total: ${total}</Text>
                    <Pressable onPress={confirmCart}>
                        <Text>Confirmar</Text>
                    </Pressable>
                </>
            ) : (
                <View style={styles.containerCarritoVacio}>
                    <Text style={styles.text}>No hay productos agregados!</Text>
                </View>
            )}
        </View>
    )
}

export default Cart;

const styles = StyleSheet.create({
    containerCarritoVacio: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
})