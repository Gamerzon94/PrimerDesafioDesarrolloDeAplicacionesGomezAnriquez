import { View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

function Home ({navigation}) {
    return (
        <View>
            <Categories navigation={navigation}/>
        </View>
    );
}

export default Home;