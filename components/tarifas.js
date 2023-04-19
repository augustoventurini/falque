
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

export default function Tarifas(navigation) 
{
    return (
        <View style = {styles.container}>

            <TouchableOpacity onPress= {() => navigation.navigate('Home')} style={styles.dots}>
                <AntDesign name="arrowleft" size={32} color="#2ECC71" />
            </TouchableOpacity>

            <Text style = {styles.textotarifas}> tarifas </Text>

            <Text style = {styles.estudante}> CriciumaCard Estudante </Text>
            <Text style = {styles.valorestudante}> R$ 2,22 </Text>

            <Image source={require('C:/Users/Augusto/falquee/assets/tarifas/linha.png')} style = {styles.linha1}/>

            <Text style = {styles.professor}> CriciumaCard Professor </Text>
            <Text style = {styles.valorprofessor}> R$ 3,34 </Text>

            <Image source={require('C:/Users/Augusto/falquee/assets/tarifas/linha.png')} style = {styles.linha2}/>

            <Text style = {styles.cidadao}> CriciumaCard Cidadão </Text>
            <Text style = {styles.valorcidadao}> R$ 4,45 </Text>

            <Image source={require('C:/Users/Augusto/falquee/assets/tarifas/linha.png')} style = {styles.linha3}/>

            <Text style = {styles.vale}> CriciumaCard Vale-Transporte </Text>
            <Text style = {styles.valorvale}> R$ 4,45 </Text>

            <Image source={require('C:/Users/Augusto/falquee/assets/tarifas/linha.png')} style = {styles.linha4}/>
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
        bottom: '27%',
        right: '41.5%',

    },

    textotarifas:
    {
        fontFamily: 'Roboto',
        color:"#2ECC71",
        fontWeight: 'bold',
        fontSize: 25,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        bottom: '26%',
    },

    estudante: 
    {
        fontFamily: 'Roboto',
        fontSize: 17,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#2ECC71",
        right: '21.5%',
        bottom: '20%',
    },

    valorestudante:
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#666666",
        right: '38.5%',
        bottom: '19%',
    },

    linha1:
    {
        position: 'relative',
        bottom: '16.5%',
    },

    professor: 
    {
        fontFamily: 'Roboto',
        fontSize: 17,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#2ECC71",
        right: '22%',
        bottom: '13%',
    },

    valorprofessor:
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#666666",
        right: '38.5%',
        bottom: '12%',
    },

    linha2:
    {
        position: 'relative',
        bottom: '9.5%',
    },

    cidadao: 
    {
        fontFamily: 'Roboto',
        fontSize: 17,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#2ECC71",
        right: '23%',
        bottom: '6%',
    },

    valorcidadao:
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#666666",
        right: '38.5%',
        bottom: '5%',
    },

    linha3:
    {
        position: 'relative',
        bottom: '2.5%',
    },

    vale: 
    {
        fontFamily: 'Roboto',
        fontSize: 17,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#2ECC71",
        right: '16%',
        top: '1%',
    },

    valorvale:
    {
        fontFamily: 'Roboto',
        fontSize: 15,
        justifyContent: "center",
        alignItems: 'center',
        position: 'relative',
        color:"#666666",
        right: '38.5%',
        top: '2%',
    },

    linha4:
    {
        position: 'relative',
        top: '5.5%',
    },

});
 