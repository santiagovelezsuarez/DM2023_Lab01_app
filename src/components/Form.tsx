import React, {useState} from 'react';
import {Modal, Text, TextInput, Alert, StyleSheet, View, TouchableOpacity, Pressable, SafeAreaView, ScrollView} from 'react-native';
import DatePicker from 'react-native-date-picker';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import BouncyCheckboxGroup, {
  ICheckboxButton,
} from "react-native-bouncy-checkbox-group";
import {User, Address} from '../models/User';

let users:User[] = [];

const Form = ({modalVisibleForm, setModalRegistro}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user_name, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [birth_date, setBirthDate] = useState(new Date());
  const [birthDateLabel, setBirthDateLabel] = useState("Fecha de nacimiento");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");      
  const [city, setCity] = useState("");
  const [code_zip, setCodeZip] = useState("");  
  const [selectedGender, setGender] = useState("");
  const [openDatePicker, setOpenDatePicker] = useState(false);  

   
  let genders:ICheckboxButton[] = [
    {id: "M", text: "M", textStyle: {textDecorationLine: "none", color: "#fff"}, style: {marginTop: 10, marginRight: 15}},      
    {id: "F", text: "F", textStyle: {textDecorationLine: "none", color: "#fff"}, style: {marginTop: 10, marginRight: 15}}
  ];

  const clearInputs = () => {
    setName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setBirthDate(new Date());
    setBirthDateLabel("Fecha de nacimiento");
    setAge(0);
    setEmail("");
    setCity("");
    setCodeZip("");
    setGender("");    
  };     
  
  const handleNewUser = () => {
    if([user_name, birth_date].includes('')){
      Alert.alert('Warning', 'Por favor, llena todos los campos', [
        {text: 'Aceptar', onPress: () => console.log('OK Pressed')},
      ]);
      return;     
    }

    let address: Address = {city, code_zip};
    let new_user: User = { user_name, password, birth_date, email, address};
    let update = false;
    users.forEach((user, i) => {
      console.log(user.email);
      console.log(new_user.email);
      if(user.email == new_user.email){
        users[i] = new_user;
        console.log("Usuario actualizado");
        console.log(users);
        //clearInputs();
        update = true;       
      }
    }, users);
    if(!update){
      users.push(new_user);
      console.log("Usuario Registrado");
      //clearInputs();
      console.log(users);
    }
    
  };
  
  return (
    <Modal animationType="slide" visible={modalVisibleForm} >
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.container}>        
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
            <Text style={{color: '#FFF', fontSize: 15, marginLeft: 10, marginTop: 25}}>Genero</Text>        
            <BouncyCheckboxGroup
              style={{ flexDirection: 'row', marginTop: 20, marginLeft: 5 }}
              data={genders} onChange={function (selectedItem: ICheckboxButton) {
                setGender(selectedItem.id.toString());
                console.log(selectedItem.id.toString());
              }}/>          
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
              onChangeText={(text) => setCodeZip(text)}/> 
            <View style={styles.dateView}>
              <TouchableOpacity onPress={() => setOpenDatePicker(true)}>
                <Text style={{color: '#FFF', fontSize: 15, marginLeft: 10, marginTop: 25}}>
                  {birthDateLabel}
                </Text>
              </TouchableOpacity>  
            </View> 
            <DatePicker
              modal
              open={openDatePicker}
              date={birth_date}
              mode={'date'}            
              onConfirm={date => {         
                setOpenDatePicker(false)       
                setBirthDate(date);
                setBirthDateLabel(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear());
              }}
              onCancel={() => {
                setOpenDatePicker(false);
              }}
              locale="es_ES" />
            <Pressable            
              onPress={() => handleNewUser()}
              style={styles.btnSignUp}>
              <Text style={styles.textStyle}>Registrarse</Text>
            </Pressable>     
            <Pressable
                onPress={() => setModalRegistro(false)}           
                style={styles.btnCancel}>
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>         
          </View>
        </SafeAreaView>
      </ScrollView>      
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
    marginTop: 20,
  },
  title:{
    fontSize: 30,
    color: '#D4DDF7',
    marginTop: 15,
  },
  input: {
    marginTop: 10,
    borderColor: '#FFF',
    width: 300,
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    color: '#EDA',     
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
    marginBottom: 10, 
    borderRadius: 10,
  },
  btnCancel: {
    backgroundColor: "#F84050",
    padding: 10,
    marginTop: 10, 
    marginBottom: 20,   
    borderRadius: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#FFF',
  },
  scrollView: {
    backgroundColor: '#132537',    
  },
});

export default Form;