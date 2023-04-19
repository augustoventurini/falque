import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'

export default function Idoso({navigation}) {
    return (
        <View style= {styles.container}>
            <TouchableOpacity onPress= {() => navigation.navigate('Professor')} style = {styles.voltar}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoidoso/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <View style = {styles.titulo}>
                <Text style = {styles.cartaoidoso}>Cartão idoso</Text>
            </View>

            <View style = {styles.cartao}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cartaoidoso/cartaoidoso.png')} style = {styles.cartaoidoso1}/>
            </View>

            <View style = {styles.ocartao}>
                <Text style = {styles.ocartao1}>O Cartão CriciúamCard Idoso é destinado as pessoas com idade de 65 (sessenta e cinco) anos ou superior.</Text>
            </View>

            <View style = {styles.para}>
                <Text style = {styles.para1}>Para cadastramento o usuário deverá comparecer a ACTU, apresentando o RG e CPF.</Text>
            </View>

            <View style = {styles.devera}>
                <Text style = {styles.devera1}>O cartão Idoso deverá ser revalidado anualmente no mês de aniversário do usuário.</Text>
            </View>

            <View style = {styles.seta}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.ouso}>
                <Text style = {styles.ouso1}>O uso do cartão CriciúmaCard Idoso é pessoal e intransferível, conforme decreto municipal 975/SA/2004 e SG/nº 1088/18.</Text>
            </View>

            <View style = {styles.seta1}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.nao}>
                <Text style = {styles.nao1}>NÃO EMPRESTE SEU CRICIUMACARD IDOSO!</Text>
            </View>

            <View style = {styles.seta2}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.retirada}>
                <Text style = {styles.retirada1}>Para retirada do cartão é necessário apresentar documento de identificação com foto.</Text>
            </View>

            <View style = {styles.botao1}>
          <TouchableOpacity onPress= {() => navigation.navigate('Cadastrosecundario')} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>selecionar</Text>
          </TouchableOpacity>
         </View>


        </View>
        );
    }

const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
          },
          voltar: {
            right: "43%",
            bottom: "17%",
            transform: [
                {rotateY: '180deg'},
                {scaleY: -1} 
            ]
          },
          setaverde: {
            width: 15,
            height: 14
          },
          titulo: {
            bottom: "20%"
          },
          cartaoidoso: {
            fontFamily: "Roboto",
            fontSize: 26,
            fontWeight: "bold",
            color: "#2ecc71",
          },
          cartaoidoso1: {
            bottom: "120%",
            width: 220,
            height: 125,
          },
          ocartao: {
            width: 300,
            bottom: "15%"
          },
          ocartao1: {
            fontSize: 12,
            textAlign: "center",
          },
          para: {
            width: 300,
            bottom: "10%"
          },
          para1: {
            fontSize: 12,
            textAlign: "center",
          },
          devera: {
            width: 300,
            top: "-5%"
          },
          devera1: {
            fontSize: 12,
            textAlign: "center"
          },
          seta: {
            top: "5%",
            right: "42%",
          },
          ouso: {
            width: 300,
            top: "3%",
            right: "1%",
          },
          ouso1: {
            fontSize: 12,
            textAlign: "center",
          },
          seta1: {
            right: "42%",
            top: "10%"
          },
          nao: {
            top: "8%",
            right: "4%",
          },
          nao1: {
            fontSize: 12,
            textAlign: "center",
            color: "#666666",
          },
          seta2: {
            right: "42%",
            top: "17%",
          },
          retirada: {
            width: 300,
            top: "15%",
            right: "3%",
          },
          retirada1: {
            fontSize: 12,
            textAlign: "center",
          },
          botao1: {
            top: "22%",
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