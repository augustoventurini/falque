
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';




export default function Cidadao({navigation}) {
  return (
    <View style= {styles.container}>

        <TouchableOpacity onPress= {() => navigation.navigate('Estudante')} style = {styles.ir}>
           <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
        </TouchableOpacity>

        <View style = {styles.cartaocidadao}>
            <Text style = {styles.cartaocidadao1}>cartão cidadão</Text>
        </View>

        <View style = {styles.imgcart}>
            <Image source={require('C:/Users/Augusto/falquee/assets/cartaocidadao-app/card_cidadao.png')} style = {styles.imgcart1} />
        </View>

        <View style = {styles.info}>
            <Text style = {styles.info1}>O cartão CriciúmaCard Cidadão é para qualquer pessoa que utilize o sistema integrado de transporte urbano de Criciúma.</Text>
        </View>

        
        <View style = {styles.info2}>
            <Text style = {styles.info3}>Para o cadastro é necessário apresentar cpf e rg e a carga mínima inicial de R$ 7,80.</Text>
        </View>

        
        <View style = {styles.info4}>
            <Text style = {styles.info5}>Não há limite para utilizações e qualquer pessoa da família pode utilizar, desde que tenha créditos.</Text>
        </View>

        <View style = {styles.info6}>
            <Text style = {styles.info7}>Menores de idade (entre seis e dezessete anos), podem ter seu Cartão, neste caso, basta um responsável solicitar o cartão.</Text>
        </View>

        <View style = {styles.botao1}>
          <TouchableOpacity onPress= {() => navigation.navigate('Cadastrosecundario')} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>Selecionar</Text>
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
  ir: {
    left: "42%",
    bottom: "12%",
  },
  voltar: {
    right: "44%",
    bottom: "10.5%",
    transform: [
        {rotateY: '180deg'},
        {scaleY: -1} 
    ]
  },
  setaverde: {
    width: 15,
    height: 14
  },
  cartaocidadao: {
    bottom: "15%"
  },
  cartaocidadao1: {
    color:"#2ECC71",
    fontWeight: 'bold',
    fontSize: 25,
    justifyContent: "center",
  },
  imgcart: {
    bottom: "14%",
    justifyContent: "center",
  },
  imgcart1: {
      height: 200,
      width: 300,
  },
  info: {
    bottom: "8%",

  },
  info1: {
    fontSize: 16,
    textAlign: "center",
  },
  info2: {
    bottom: "3%",
  },
  info3: {
    fontSize: 16,
    textAlign: "center",
  },
  info4: {
    bottom: "-3%",
  },
  info5: {
    fontSize: 16,
    textAlign: "center",
  },
  info6: {
    bottom: "-10%",
  },
  info7: {
    fontSize: 16,
    textAlign: "center",
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

});
 