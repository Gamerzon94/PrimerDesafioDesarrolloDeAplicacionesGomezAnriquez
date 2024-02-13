import { StyleSheet, Text, View } from "react-native";
import { colors } from '../global/colors';

const Card = ({children, style}) => {
    return (
        <View style={{...styles.container, ...style}}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 4,
        backgroundColor : colors.card,
    },
});