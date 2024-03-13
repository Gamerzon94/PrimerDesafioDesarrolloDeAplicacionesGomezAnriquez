import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack';
import CartStack from "./CartStack";
import OrdersStack from "./OrdersStack";
import { colors } from '../global/colors';
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
            >
            <Tab.Screen name="ShopTab" component={ShopStack} 
                options={{
                        tabBarIcon: ({ focused }) => {
                        return (
                            <View style={styles.tabContainer}>
                            <Entypo name="shop" size={30} color={focused ? "black" : "grey"} />
                            <Text style={{ color: focused ? "black" : "grey" }}>Tienda</Text>
                            </View>
                        );
                        },
                    }}/>
                <Tab.Screen name="CartSCartTabtack" component={CartStack} 
                options={{
                    tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                        <AntDesign
                            name="shoppingcart"
                            size={30}
                            color={focused ? "black" : "grey"}
                        />
                        <Text style={{ color: focused ? "black" : "grey" }}>Carrito</Text>
                        </View>
                    );
                    },
                }}/>
                <Tab.Screen
                name="OrdersTab"
                component={OrdersStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.tabContainer}>
                        <FontAwesome
                            name="list-ul"
                            size={30}
                            color={focused ? "black" : "grey"}
                        />
                        <Text style={{ color: focused ? "black" : "grey" }}>Orders</Text>
                        </View>
                    );
                    },
                }}
                />
            </Tab.Navigator>
    );
}

export default TabNavigator;

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.header,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    },
    tabContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
})