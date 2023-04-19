
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 



export default function Inicio({navigation}) {
  return (
      <View style= {styles.container}>

        <View style = {styles.logo}>
            <Image source={require('C:/Users/Augusto/falquee/assets/logo.png')} style = {styles.img1}/>
        </View>
        <View style = {styles.texto} >
            <Text style = {styles.seu}>o seu aplicativo</Text>
        </View>
        <View style = {styles.texto2}>
            <Text style = {styles.mobilidade}>de mobilidade urbana</Text>
        </View>

        <View style = {styles.botao1}>

          <TouchableOpacity onPress= {() => navigation.navigate('Login')} style = {styles.botaoestilo}>

            <Text style = {styles.textobotao1}>entre na sua conta</Text>
            
          </TouchableOpacity>

        </View>
        <View style = {styles.botao2}>

          <TouchableOpacity onPress= {() => navigation.navigate('Cadastro')} style = {styles.botaoestilo2}>

            <Text style = {styles.textobotao2}>   crie uma conta    </Text>

          </TouchableOpacity>

        </View>

        <View style = {styles.baseredonda}>

            <Image source= {require('C:/Users/Augusto/falquee/assets/Inicio-app/baseredonda.png')} />
            
        </View>
        
        <View style = {styles.parada}>

            <Image source= {require('C:/Users/Augusto/falquee/assets/Inicio-app/Parada.png')} />
        </View>

        <View style = {styles.correndo}>

            <Image source= {require('C:/Users/Augusto/falquee/assets/Inicio-app/Correndo.png')}/>

        </View>

        <View style = {styles.onibus}>

            <Image source= {require('C:/Users/Augusto/falquee/assets/Inicio-app/Onibus.png')}/>

        </View>



    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ECC71',
    alignItems: 'center',
    justifyContent: 'center',
  },

  baseredonda: {
      top: "27%",
      zIndex: 0,
  },
  logo: {
      top: "30%",
  },
  parada: {
      bottom: "45%",
      right: "16%",
  },
  correndo: {
      bottom: "50.5%",
      left: "2%",
  },
  onibus: {
      bottom: "58%",
      left: "25%",
  },
  seu: {
      color : "#2ECC71",
      fontSize: 38,
      fontWeight: 'bold',
  },
  texto: {
    top: "53%",
    zIndex: 1,
  },
  texto2: {
    top: "53%",
    zIndex: 1,
  },
  mobilidade: {
    color : "#2ECC71",
    fontSize: 38,
    fontWeight: 'bold',
  },
  botao1: {
    top: "63%",
  },
  botaoestilo: {
    elevation: 8,
    backgroundColor: "#2ECC71",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    zIndex: 1,
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 100,
  },
  textobotao1: {
    color: "#ffffff"
  },
  botao2: {
    top: "67%",
  },
  botaoestilo2: {
    elevation: 8,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    zIndex: 1,
    borderBottomWidth: 1,
    borderColor: "#2ecc71",
    borderRadius: 100,
  },
  textobotao2: {
    color: "#2ECC71"
  },





});
 