import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/Cart";
import CartComplete from "../screens/CartComplete";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

const CartStack = () => {
    return (
        <Stack.Navigator initialRouteName="Cart"
            screenOptions={{header: ()=> <Header title="Carrito" />}}>
            <Stack.Screen
                name="Cart"
                component={Cart}
            />
            <Stack.Screen
                name="CartComplete"
                component={CartComplete} />
        </Stack.Navigator>
    );
}

export default CartStack;