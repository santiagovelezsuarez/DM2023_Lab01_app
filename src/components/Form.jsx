import React, {useState} from 'react';
import {Modal, Text, TextInput, StyleSheet, View, TouchableOpacity, Pressable} from 'react-native';
import DatePicker from 'react-native-date-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";

const Form = ({modalVisibleForm}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());
  const [birthDateLabel, setBirthDateLabel] = useState("Fecha de nacimiento");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");      
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");  
  const [selectedGender, setGender] = useState("");

  const [open, setOpen] = useState(false);      
  
  return (
    <Modal animationType="slide" visible={modalVisibleForm} >
      <View style={styles.container}>
      <Text style={styles.title}>Formulario de registro</Text>
        <View style={styles.form}>
          <TextInput 
            style={styles.input} 
            placeholder="Nombre(s)"
            placeholderTextColor= "#FFF"
            onChangeText={(text) => setName(text)}/>   
          <TextInput 
            style={styles.input} 
            placeholder="Apellidos"
            placeholderTextColor= "#FFF"
            onChangeText={(text) => setLastName(text)}/>            
          <BouncyCheckboxGroup
            style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}
            data={[{id: "M", label:"M"}, {id: "F"}]}            
          />          
          <TextInput 
            style={styles.input} 
            placeholder="Nombre de usuario"
            placeholderTextColor= "#FFF"
            onChangeText={(text) => setUserName(text)}/>
          <TextInput
            style={styles.input}
            placeholder="Correo Electrónico"
            placeholderTextColor= "#FFF"
            keyboardType="email-address"
            onChangeText={(text) => setEmail(text)}/>
          <TextInput 
            style={styles.input} 
            secureTextEntry={true}
            placeholder="Contraseña"
            placeholderTextColor= "#FFF"
            onChangeText={(text) => setPassword(text)}/>           
          <TextInput 
            style={styles.input}             
            placeholder="Ciudad"
            placeholderTextColor= "#FFF"
            onChangeText={(text) => setCity(text)}/>    
          <TextInput 
            style={styles.input}            
            placeholder="Codigo Postal"
            placeholderTextColor= "#FFF"  
            onChangeText={(text) => setPostalCode(text)}/> 
          <View style={styles.dateView}>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <Text style={{color: '#FFF', fontSize: 15, marginLeft: 10, marginTop: 25}}>
                {birthDateLabel}
              </Text>
            </TouchableOpacity>  
          </View> 
          

          <DatePicker
            modal
            open={open}
            date={birthDate}
            mode={'date'}            
            onConfirm={date => {
              setOpen(false);
              setBirthDate(date);
              setBirthDateLabel(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
            }}
            onCancel={() => {
              setOpen(false);
            }}
            locale="es_ES" />   

          <Pressable            
            onPress={() => saveUser()}
            style={styles.btnSignUp}>
            <Text style={styles.textStyle}>Registrarse</Text>
          </Pressable>     
          <Pressable           
            style={styles.btnCancel}>
            <Text style={styles.textStyle}>Cancelar</Text>
          </Pressable>         
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#132537',
    alignItems: 'center',    
  },
  form:{
    marginTop: 50,
  },
  title:{
    fontSize: 30,
    color: '#D4DDF7',
    marginTop: 50,
  },
  input: {
    marginTop: 20,
    borderColor: '#FFF',
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1     
  },    
  dateView: {
    flexDirection: 'row',
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 30,  
  },
  btnSignUp: {
    backgroundColor: "#204090",
    padding: 10,
    marginTop: 10,    
    borderRadius: 10,
  },
  btnCancel: {
    backgroundColor: "#F84050",
    padding: 10,
    marginTop: 10,    
    borderRadius: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF',
  },
});

export default Form;