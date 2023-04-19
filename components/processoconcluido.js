import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,Animated, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function Processo({navigation}) {
    return (
        <View style= {styles.container}>
            <View style = {styles.logo}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/logohd.jpg')} style = {styles.logohd} />
            </View>

            <View style = {styles.processo}>
                <Text style = {styles.processo1}>Cadastro concluído</Text>
            </View>

            <View style = {styles.agora}>
                <Text style = {styles.agora1}>Agora é só esperar a verificação dos documentos, assim que ela for efetuada avisaremos você.</Text>
            </View>

            <View style = {styles.botao1}>
          <TouchableOpacity onPress= {() => navigation.navigate('Login')} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>Voltar</Text>
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
      logohd: {
        width: 130,
        height: 130,
        bottom: "180%",
        right: "35%",
    },
    processo: {
        bottom: "20%",
    },
    processo1: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#2ecc71"
    },
    agora: {
        width: 300,
        top: "10%",
    },
    agora1: {
        fontSize: 15,
        color: "#2ecc71",
        textAlign: "center",
    },
    botao1: {
        top: "30%",
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