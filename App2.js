import React, {useState} from 'react';
import { UserForm } from "./UserForm";
import { Pressable, SafeAreaView, StyleSheet, Text, Modal } from 'react-native';

export default function App(){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Registrate en la {""}
                <Text style={styles.titleBold}>UAM</Text>
            </Text>

            <Pressable onPress={() => setModalVisible(true)} style={styles.btnNewUser}>
                <Text style={styles.titleButton} hoverStyle={styles.hoverStyle}>Nuevo Usuario</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible2(true)} style={styles.btnNewUser}>
                <Text style={styles.titleButton} hoverStyle={styles.hoverStyle}>Logo</Text>
            </Pressable>

            <Modal animationType="slide" visible={modalVisible}>
                <Text>Desde modal</Text>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0069A3",
        marginTop: 25,
        flex: 1,
    },
    title: {
        textAlign:"center",
        fontSize: 22,
        color: "#FFFFFF"
    },
    titleBold: {
        fontWeight: "900",
        color: "#f4d73b",
    },
    btnNewUser: {
        backgroundColor: "#f4d73b",
        padding: 10,
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 10,
    },   
    titleButton: {
        textAlign: "center",
        fontSize: 20,
        color: "#0069a3",
    }
});