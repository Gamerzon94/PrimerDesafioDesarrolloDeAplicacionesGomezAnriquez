import { View } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";

function Home () {
    return (
        <View>
            <Header title = {'Inicio'}/>
            <Categories/>
        </View>
    );
}

export default Home;