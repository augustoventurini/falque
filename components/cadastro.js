
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase, checkboxWrapper} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import db from 'C:/Users/Augusto/falquee/config/firebase.js'
import { collection, addDoc } from "firebase/firestore";


export default function Cadastro({navigation}) {
  const [alternateImage, setAlternativeImage] = useState(true);
  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');

  const changeImage = () => {
    setAlternativeImage(alternateImage => !alternateImage);
  }

  async function addUsuario(){
    const dbRef = collection(db,  "usuario")
    await addDoc(dbRef, {
      nome: nome,
      senha: input,
      email: email,
      cpf: cpf,
      telefone: telefone
    })
  }

  return (
    <View style= {styles.container}>
        <View style = {styles.logo}>
            <Image source = {require('C:/Users/Augusto/falquee/assets/Login-app/logocomfundo.png')} style = {styles.logo1}  />
        </View>

        <View style = {styles.cadastro}>
            <Text style = {styles.cadastro1}>Cadastro</Text>
        </View>

        <View style = {styles.nomecompleto}>
            <Text style = {styles.nomecompleto1}>Nome completo</Text>
        </View>
        <View style = {styles.dnome}>
          <TextInput
            value={nome}
            onChangeText= { (texto) => setNome(texto)}
            style = {styles.dnome1}
            placeholder= 'Digite seu nome'
          />
        </View>

        <View style = {styles.senha}>
            <Text style = {styles.senha1}>Senha</Text>
        </View>

        <View style = {styles.inputArea}>
          <TextInput
          style = {styles.input}
          placeholder='digite sua senha'
          placeholderTextColor={'FFFFFF'}
          value={input}
          onChangeText= { (texto) => setInput(texto)}
          />
        </View>

        <View style = {styles.cpf}>
            <Text style = {styles.cpf1}>CPF</Text>
        </View>
        <View style = {styles.dcpf}>
          <TextInput
              value={cpf}
              onChangeText= { (texto) => setCpf(texto)}
              style = {styles.dcpf1}
              placeholder= 'Digite seu cpf'
          />
        </View>

        <View style = {styles.email}>
            <Text style = {styles.email1}>E-mail</Text>
        </View>
        <View style = {styles.demail}>
            <TextInput
              value={email}
              onChangeText= { (texto) => setEmail(texto)}
              style = {styles.demail1}
              placeholder= 'Digite seu e-mail'
              keyboardType='email-address'
            />
        </View>

        <View style= {styles.telefone}>
            <Text style = {styles.telefone1}>Telefone</Text>
        </View>
        <View style = {styles.dtelefone}>
            <TextInput 
                value={telefone}
                onChangeText= { (texto) => setTelefone(texto)}
                style = {styles.dtelefone1}
                placeholder= 'Digite seu telefone'
            />
         </View>

         <View style = {styles.checkbox}>
           <TouchableOpacity onPress= {changeImage}>
         
          {alternateImage && <Image source={require("C:/Users/Augusto/falquee/assets/Cadastroinicial-app/carbon_checkbox.png")}/>}
          {!alternateImage && <Image source={require("C:/Users/Augusto/falquee/assets/Cadastroinicial-app/selecionada.png")}/>}
          </TouchableOpacity>
         </View>

         <View style = {styles.botao1}>
          <TouchableOpacity onPress = {() => {
            addUsuario();
            navigation.navigate('Cidadao');
          }} style = {styles.botaoestilo}>

            
            <Text style = {styles.textobotao1}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.politica}>
            <TouchableOpacity>
              <Text style = {styles.politicapriva}>Politica de Privacidade, </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
      bottom: "6%",
      right: "33%",
  },
  logo1: {
    width: 87,
    height: 80,
  },
  cadastro: {
    bottom: "1%",
  },
  cadastro1: {
    fontSize: 25,
    color: "#2ECC71",
    fontWeight: "bold"
  },
  nomecompleto: {
    top: "5%",
    right: "27%",
  },
  nomecompleto1: {
    color: "#2ECC71",
    fontSize: 15,
  },
  dnome1: {
    borderWidth: 2,
    padding: 8,
    borderColor: "#2ECC71",
    width: 300,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  dnome: {
    top: "5%",
  },
  cpf: {
    top: "5%",
    right: "38%",
  },
  cpf1: {
    color: "#2ECC71",
    fontSize: 15,
  },
  dcpf1: {
    borderWidth: 2,
    padding: 8,
    borderColor: "#2ECC71",
    width: 300,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  dcpf: {
    top: "5%",
  },
  email: {
    top: "5%",
    right: "38%",
  },
  email1: {
    color: "#2ECC71",
    fontSize: 15,
  },
  inputArea: {
    flexDirection: 'row',
    width: 300,
    backgroundColor: "#2ecc71",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    top: "10%",
    right: "-0%",
    borderColor: "#2ecc71"
  },
  input: {
    width: 250,
    height: 50,
    color: '#2ecc71',
    padding: 8,
    fontSize: 15,
    borderRadius: 10,
    borderColor: "#2ecc71",
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  senha1: {
    color: "#2ECC71",
    fontSize: 15,
  },
  senha: {
    top: "4%",
    right: "36%",
  },
  demail1: {
    borderWidth: 2,
    padding: 8,
    borderColor: "#2ECC71",
    width: 300,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  demail: {
    top: "5%",
  },
  telefone: {
    top: "5%",
    right: "38%",
  },
  telefone1: {
    color: "#2ECC71",
    fontSize: 15,
  },
  dtelefone1: {
    borderWidth: 2,
    padding: 8,
    borderColor: "#2ECC71",
    width: 300,
    margin: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  dtelefone: {
    top: "5%",
  },
  botao1: {
    top: "13%",
  },
  botaoestilo: {
    elevation: 8,
    backgroundColor: "#2ECC71",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 120,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 100,
  },
  textobotao1: {
    color: "#ffffff",
    fontSize: 20,
  },
  checkbox: {
    top: "9%",
    right: "39%",
  },
  politica: {
    bottom: "0.5%",
    right: "16%",
  },
  politicapriva: {
    color :"#2ECC71",
    fontSize: 13
  },


});
 