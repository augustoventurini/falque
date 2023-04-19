import { StatusBar } from 'expo-status-bar';
import { StyleSheet,ScrollView,Animated, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, TextInput, TouchableOpacityBase } from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import React, {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';



export default function Cadastrosecundario(navigation) {
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
        if (!result.canceled) {
            setImage2(result.assets[0].uri);
        }
    };

    return (
        <View style= {styles.container} >

            <View style = {styles.logo}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/logohd.jpg')} style = {styles.logohd} />
            </View>

            <View style = {styles.selecione}>
                <Text style = {styles.selecione1}>Insira seus documentos</Text>
            </View>

            <View style = {styles.cartao}>
                <Text style = {styles.cartao1}>Cartão selecionado</Text>
            </View>

            <View style = {styles.cardcidadao}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cartaocidadao-app/card_cidadao.png')} style = {styles.cardcidadao1} />
            </View>

            <View style = {styles.documento}>
                <Text style = {styles.documento1}>Documentação necessária</Text>
            </View>

            <View style = {styles.seta1}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.cpf}>
                <Text style = {styles.cpf1}>CPF (Cadastro de Pessoas Físicas)</Text>
            </View>

            <TouchableOpacity 
            onPress = {pickImage}
            style = {styles.imagepicker}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/inseririmagem.png')} style = {styles.imagepicker1}/>
                {image && <Image source={{ uri: image }} style={{ width: 100, height: 100 }} />}
            </TouchableOpacity>

            <View style = {styles.seta2}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.rg}>
                <Text style = {styles.rg1}>RG (Registro Geral)</Text>
            </View>

            <TouchableOpacity 
            onPress = {pickImage}
            style = {styles.imagepicker2}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cadastrosecundario/inseririmagem.png')} style = {styles.imagepicker3}/>
                {image2 && <Image source={{ uri: image2 }} style={{ width: 100, height: 100 }} />}
            </TouchableOpacity>
            
            <View style = {styles.botao1}>
          <TouchableOpacity onPress = {() => navigation.navigate('Home')} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>Próximo</Text>
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
        logohd: {
            width: 130,
            height: 130,
            bottom: "80%",
            right: "35%",
        },
        selecione: {
            bottom: "14%",
            textAlign: "center",
        },
        selecione1: {
            fontSize: 20,
            color: "#2ECC71",
            fontWeight: "bold",
        },
        cartao: {
            bottom: "10%",
            right: "30%",
        },
        cartao1: {
            color: "#2ECC71"
        },
        cardcidadao1: {
            width: 250,
            height: 200,
            bottom: "40%",
        },
        documento: {
            bottom: "10%",
            right: "23%",
        },
        documento1: {
            color: "#2ECC71"
        },
        setaverde: {
            width: 18,
            height: 15,
        },
        seta1: {
            top: "-5%",
            right: "43%",
        },
        cpf: {
            bottom: "7%",
            right: "13%",
        },
        cpf1: {
            fontSize: 13
        },
        imagepicker: {
            bottom: "2%",
            right: "20%",
        },
        imagepicker1: {
            width: 188,
            height: 34
        },
        seta2: {
            right: "43%",
            top: "5%",
        },  
        imagepicker2: {
            right: "20%",
            top: "7%",
        },
        imagepicker3: {
            width: 193,
            height: 35
        },
        rg: {
            right: "26%",
            top: "3%"
        },
        rg1: {
            fontSize: 13
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

    });