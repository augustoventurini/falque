
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase, ToastAndroid } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import { collection, query, where, getDocs } from "firebase/firestore";
import db from 'C:/Users/Augusto/falquee/config/firebase.js'

export default function Login({navigation}) {
  const [input, setInput] = useState('');
  const [email, setEmail] = useState('');
  const [hidepass, setHidePass] = useState(true);
  const usuarioRef = collection(db, "usuario")
  
  async function entrar(email, senha) {
    condicoes = query(usuarioRef, where("email", "==", email), where("senha", "==", senha))
    resultado = await getDocs(condicoes);

    loginValido = false

    resultado.forEach(doc => {
      if(doc.data()) {
        loginValido = true
      }
    });

    if(!loginValido) {
      ToastAndroid.show("O Usuário ou senha digitados estão incorretos!", 5)
    } else {
      navigation.navigate('Home')
    }

    return loginValido
  }

  return (
    <View style= {styles.container}>
      
        <View style = {styles.logo}>
          <TouchableOpacity onPress = {() => navigation.navigate('Inicio')}>
            <Image source = {require('C:/Users/Augusto/falquee/assets/Login-app/logocomfundo.png')} style = {styles.logo1}/>
          </TouchableOpacity>
        </View>

        <View style = {styles.bemvindo}>
            <Text style = {styles.bemvindo1}>bem vindo</Text>
        </View>
        <View style = {styles.email}>
            <Text style = {styles.email1}>e-mail</Text>
        </View>
        <View style = {styles.demail}>
          <TextInput
            value={email}
            onChangeText= { (texto) => setEmail(texto)}
            style = {styles.demail1}
            placeholder= 'digite seu e-mail'
            keyboardType='email-address'
          />
        </View>

        <View style = {styles.senha}>
            <Text style = {styles.senha1}>senha</Text>
        </View>

        <View style = {styles.inputArea}>
          <TextInput
          style = {styles.input}
          placeholder='digite sua senha'
          placeholderTextColor={'FFFFFF'}
          value={input}
          onChangeText= { (texto) => setInput(texto)}
          secureTextEntry= {hidepass}
          />
          <TouchableOpacity style = {styles.icon} onPress= { () => setHidePass(!hidepass)} >
            <Ionicons name='eye' color= "#FFF" size= {25}/>
          </TouchableOpacity>
        </View>

        <View style = {styles.esqueceu}>
          <TouchableOpacity onPress= {() => navigation.navigate('')}>
            <Text style = {styles.esqueceusenha}>esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <View style = {styles.botao1}>
          <TouchableOpacity onPress = {() => entrar(email, input)} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>entrar</Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.naopossui}>
          <Text style = {styles.estilotexto}>não possuí cadastro? se                   !</Text>
        </View>

        <View style= {styles.inscreva}>
          <TouchableOpacity onPress = {() => navigation.navigate('Cadastro')}><Text style = {styles.inscreva2}>inscreva</Text></TouchableOpacity>
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
    bottom: "18%",
  },
  logo1: {
    width: 132,
    height: 119,
  },
  bemvindo: {
      bottom: "13%",

  },
  bemvindo1: {
      fontSize: 20,
      color: "#2ECC71",
      fontWeight: "bold"
  },
  email1: {
    color: "#2ECC71",
    fontWeight: "bold",
    fontSize: 15,
  },
  email: {
    bottom: "3%",
    right: "35%",
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
    bottom: "3%",
    right: "3%",
  },
  senha1: {
    color: "#2ECC71",
    fontWeight: "bold",
    fontSize: 15,
  },
  senha: {
    bottom: "-1%",
    right: "35%",
  },
  inputArea: {
    flexDirection: 'row',
    width: 300,
    backgroundColor: "#2ECC71",
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    bottom: "-4%",
    right: "1.5%",
  },
  input: {
    width: 250,
    height: 50,
    color: '#fff',
    padding: 8,
    fontSize: 15,
    borderRadius: 10,
    borderColor: "#FFFFFF",
  },
  icon: {
    width: "15%",
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  esqueceu: {
    bottom: "-2%",
    left: "18%",
  },
  esqueceusenha: {
    fontFamily: "Roboto",
    color: "#666666",
    fontSize: 13,
  },
  botao1: {
    top: "15%",
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
  estilotexto: {
    fontSize: 13,
    color: "#666666"
  },
  naopossui: {
    top: "17%",
    alignItems: "center"
  },
  inscreva2: {
    color: "#2ECC71"
  },
  inscreva: {
    top: "14.8%",
    left: "18%",
  }










});
 