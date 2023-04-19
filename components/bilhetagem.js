
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';


export default function Bilhetagem(navigation) 
{
    return (
        <View style = {styles.container}>

            <TouchableOpacity onPress= {() => navigation.navigate('Home')} style={styles.dots}>
                <AntDesign name="arrowleft" size={32} color="#2ECC71" />
            </TouchableOpacity>

            <Text style = {styles.textobilhetagem}> Bilhetagem eletrônica </Text>

            <Text style = {styles.texto1}> Implantado em 2004, o sistema de bilhetagem eletrônica é uma ferramenta de controle operacional. Utilizado em toda frota e terminais 
            do serviço regular de passageiros. Através dele é possível fazer acompanhamentos estatísticos do sistema. Proporcionando maior agilidade e segurança aos usuários, 
            otimizando as operações dentro do coletivo. </Text>

            <Image source={require('C:/Users/Augusto/falquee/assets/bilhetagem/linha.png')} style = {styles.linha}/>

            <Text style = {styles.cartao}> Cartões CriciumaCard </Text>
            
            <Text style = {styles.texto2}> O “CriciúmaCard” é o cartão utilizado no sistema integrado de transporte de passageiros no município de Criciúma. O cartão é recarregável 
            e, se bem conservado tem durabilidade de até 5 anos. Sua utilização é bem simples: o cliente aproxima o cartão no validador que fica junto a catraca. O equipamento emite 
            um sinal sonoro e em seguida libera sua passagem, mediante a disponibilidade de saldo. Caso apareça um sinal vermelho, observe com atenção a mensagem na tela frontal. Em 
            caso de dúvida, fiscais, motoristas e cobradores estão à sua disposição. </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: 
    {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },

    dots:
    {
        position: 'relative',
        bottom: '17%',
        right: '41.5%',

    },

    textobilhetagem:
    {
        fontFamily: 'Roboto',
        color:"#2ECC71",
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        bottom: '14%',
    },

    texto1: 
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        position: 'relative',
        bottom: '10%',
        textAlign: 'left',
        width: '90%',
    },

    linha:
    {
        position: 'relative',
        bottom: '5%',
    },

    cartao: 
    {
        fontFamily: 'Roboto',
        fontSize: 17,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#2ECC71",
        right: '24%',
    },

    texto2:
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        position: 'relative',
        top:  '2%',
        textAlign: 'left',
        width: '90%',
    },

});
 