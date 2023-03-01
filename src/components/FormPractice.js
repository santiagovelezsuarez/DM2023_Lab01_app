import React from 'react';
import {SafeAreaView, StyleSheet, View, Modal, TextInput} from 'react-native'

export const FormPractice = ({modal, setModal}) => {  
    const [value, setValue] = React.useState('Nombre');
    const capturaValor = (event) => {console.log(event.target.value)}  
    return(
        <SafeAreaView styles={style.content}>
            <Modal visible={modal}>
                <View styles={style.container}>
                    <Text styles={style.title}>Formulario</Text>
                    <TextInput styles={style.text_font} editable value={value} onChangeText={capturaValor}>                        
                    </TextInput>
                </View>
                <View styles={style.container}>
                    <Text styles={style.title}>Formulario</Text>
                    <TextInput styles={style.text_font} editable placeholder="" onChangeText={capturaValor}>                        
                    </TextInput>
                </View>
            </Modal>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    content:{   
        flex: 1,    
        backgroundColor: '#0069A3',
    },
    container:{
        borderBottomWidth: 1,
        borderBottomColor:'#000',
        padding: 10,
        backgroundColor: '#FAFAFA',
        borderRadius: 10,
    },
    title:{
        fontWeight: 'bold',
    },
    text_font:{
        fontFamily: 'Fira Sans',
    },
})