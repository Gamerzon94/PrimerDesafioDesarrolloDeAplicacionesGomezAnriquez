import { FlatList, StyleSheet, Text, View, Pressable, ScrollView } from 'react-native'
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
    const { localId } = useSelector((state) => state.authReducer.value);
    

    const dispatch = useDispatch();

    const confirmCart = ()=> {
        const orderData = {
            userId: localId,
            createdAt: Date.now(),
            items: cartItems.map(cartItem => ({
                id: cartItem.id,
                title: cartItem.title,
                description: cartItem.description,
                price: cartItem.price,
                discountPercentage: cartItem.discountPercentage,
                rating: cartItem.rating,
                stock: cartItem.stock,
                brand: cartItem.brand,
                category: cartItem.category,
                thumbnail: cartItem.thumbnail,
                images: cartItem.images,
                quantity: cartItem.quantity
            })),
            total: total
        };
        triggerPost(orderData);
        dispatch(resetCart());
        navigation.navigate("CartComplete");
    }

    return (
        <View style={{ flex: 1 }}>
            <View>
                {cartItems.length > 0 ? (
                    <>
                        <FlatList
                            data={cartItems}
                            renderItem={({ item }) => <CartItem item={item} />}
                            keyExtractor={(cartItem) => cartItem.id}
                            contentContainerStyle={{paddingBottom: 320}}
                        />
                        <View style={styles.conteinerInferior}>
                        <Text>Total: ${total}</Text>
                        <Pressable onPress={confirmCart}>
                            <Text>Confirmar</Text>
                        </Pressable>
                        </View>
                    </>
                ) : (
                    <View style={styles.containerCarritoVacio}>
                        <Text style={styles.text}>No hay productos agregados!</Text>
                    </View>
                )}
            </View>
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
    conteinerInferior: {  
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: 'gray',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 120,
    }
})