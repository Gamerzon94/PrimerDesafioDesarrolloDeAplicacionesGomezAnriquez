import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import jcjLogo from '../../assets/JC_Jenson_Logo.png';
import cartLogo from '../../assets/cart.png';
import { colors } from '../global/colors';
import Constants from 'expo-constants';
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function Header ({title}) {
    const { localId, user } = useSelector((state) => state.authReducer.value);
    const dispatch = useDispatch();

    const onLogout = async () => {
        dispatch(logout());
        const deletedSession = await deleteSession({ localId });
    };
    return (
        <View style={styles.header}>
            <Text style = {{fontSize : 20}}>{title}</Text>
            <Image source={jcjLogo} /> 
            {user && (
                <Pressable style={styles.logoutIcon} onPress={onLogout}>
                <MaterialIcons name="logout" size={24} color="white" />
                </Pressable>
            )}
        </View>
    );
}

export default Header;

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        gap: 8, 
        alignItems: 'center',
        backgroundColor: colors.header,
        paddingTop: Constants.statusBarHeight,
    },
    logoutIcon: {
        position: "absolute",
        right: 20,
    },
});