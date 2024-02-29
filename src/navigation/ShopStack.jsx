import {createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ItemDetail from '../screens/ItemDetail';
import ItemListCategories from '../screens/ItemListCategories';
import Header from '../components/Header';

const Navigator = () => {
    const Stack = createNativeStackNavigator();
    return (
                <Stack.Navigator initialRouteName="Home" 
                    screenOptions={({route})=> ({
                        header: () => {
                            return (
                                <Header title={route.name === 'Home' 
                                    ? 'Inicio' 
                                    : route.name === 'ItemListCategories' 
                                    ? route.params.category 
                                    : route.params.category }/>
                            )
                        }
                    })}>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="ItemDetail" component={ItemDetail} />
                    <Stack.Screen name="ItemListCategories" component={ItemListCategories} />
                </Stack.Navigator>
        )
}

export default Navigator