import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'


export default function Home({navigation}) {
    return (
        <View style= {styles.container}>

            <View style = {styles.retangulo}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/ratanguloverde.png')} style = {styles.retanguloverde}/>
            </View>

            <View style = {styles.logo}>
                <Image source={require('C:/Users/Augusto/falquee/assets/logo.png')} style = {styles.logo1}/>
            </View>

            <TouchableOpacity style = {styles.lista}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/lista.png')} style = {styles.lista1}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('perfil')} style = {styles.minhacarteirinha}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/minhacarteirinha.png')} style = {styles.minhacarteirinha1}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('')} style = {styles.horarios}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/horarios_home.png')} style = {styles.horarios1}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Tarifas')} style = {styles.tarifas}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/tarifas_home.png')} style = {styles.tarifas1}/>
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Bilhetagem')} style = {styles.bilhetagem}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/bilhetagem_home.png')} style = {styles.bilhetagem1} />
            </TouchableOpacity>

            <TouchableOpacity style = {styles.entre}>
                <Image source={require('C:/Users/Augusto/falquee/assets/homee/contato_home.png')} style = {styles.entre1} />
            </TouchableOpacity>

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
        retanguloverde: {
            top: '80%',
            width: 520,
            height: 152,
        },
        logo1: {
           top: "10%",
           right: "35%",
           width: 81,
           height: 85 
        },
        lista1: {
            bottom: "130%",
            left: "40%"
        },
        minhacarteirinha1: {
            width: 300,
            height: 200,
            top: "0%",
        },
        horarios1: {
            width: 150,
            height: 150,
            bottom: "-20%",
            right: "25%"
        },
        tarifas1: {
            width: 150,
            height: 150,
            bottom: "80%",
            left: "25%"
        },
        bilhetagem1: {
            width: 150,
            height: 150,
            bottom: "50%",
            right: "25%",
        },
        entre1: {
            width: 150,
            height: 150,
            bottom: "150%",
            left: "25%",
        },


});