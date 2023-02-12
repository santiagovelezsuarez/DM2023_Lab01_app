import React, { useState } from 'react';
import { 
  Text, 
  StyleSheet, 
  SafeAreaView, 
  TextInput, 
  Pressable, 
  Modal 
} from 'react-native';
import Form from './src/components/Form';

function App(): JSX.Element {  
  const [text, onChangeText] = useState('Text');
  const [modalVisibleLoginForm, setModalVisibleLoginForm] = React.useState(false);
  const [modalRegistro, setModalRegistro] = React.useState(false); 

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.baseText}>Hello</Text>      

      <Pressable 
        onPress={() => setModalVisibleLoginForm(!modalVisibleLoginForm)}           
        style={styles.btnStyle}>
        <Text style={styles.btnTxtStyle}>Iniciar Sesión</Text>
      </Pressable>

      <Modal animationType="slide" visible={modalVisibleLoginForm}>
        <Text>Ventana modal</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}/>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}/>
      </Modal>

      <Pressable 
        onPress={() => setModalRegistro(true)}           
        style={styles.btnStyleRed}>
        <Text style={styles.btnTxtStyle}>Registro</Text>
      </Pressable>      
      <Form modalVisibleForm={modalRegistro} setModalRegistro={setModalRegistro} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  baseText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: 'Mountainsofchristmas-Regular',
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  btnStyle: {
    backgroundColor: 'rgb(80, 80, 255)',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnStyleRed: {
    backgroundColor: 'rgb(255, 80, 80)',
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  btnTxtStyle: {
    textAlign: 'center',
    color: '#EDEEF4',
    fontSize: 20,
    textTransform: 'capitalize',
  }
});

export default App;
