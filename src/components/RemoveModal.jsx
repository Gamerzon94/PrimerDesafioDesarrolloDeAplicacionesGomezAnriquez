import { Text, View, StyleSheet, Pressable, Modal } from 'react-native';

const RemoveModal = ({
    modalVisible,
    items,
    setItems,
    setModalVisible,
    itemSelected,
}) => {
    const removeItem = () => {
        const filteredArray = items.filter((item) => item.id !== itemSelected);
        setItems(filteredArray);
        setModalVisible(false);
    }

    return (
    <Modal visible={modalVisible} animationType='slide' transparent>
        <View style={styles.modalContainer}>
            <Text>¿Esta seguro de eliminar el producto?</Text>
            <Pressable   Pressable onPress={removeItem}>
                <Text>Sí</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
                <Text>No</Text>
            </Pressable>
        </View>
    </Modal>);
};

export default RemoveModal;

const styles = StyleSheet.create({
    modalContainer: {
        height: 200,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        justifyContent: "space-between",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});