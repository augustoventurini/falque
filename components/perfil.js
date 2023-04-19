import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'

export default function Perfil({navigation}) {
    return (
        <View style= {styles.container}>

            <TouchableOpacity onPress= {() => navigation.navigate('Home')} style={styles.dots}>
                <AntDesign name="arrowleft" size={32} color="#2ECC71" />
            </TouchableOpacity>

            <View style = {styles.seu}>
                <Text style = {styles.seu1}>Seu CriciúmaCard</Text>
            </View>

            <View style = {styles.cart}>
                <Image source={require('C:/Users/Augusto/falquee/assets/perfil/cartaocidadao.png')} style = {styles.cart1}/>
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
      seu: {
        bottom: "25%",
      },
      seu1: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#2ecc71",
      },
      dots:
      {
          position: 'relative',
          bottom: '30%',
          right: '41.5%',
      },
      cart: {
        bottom: "20%",      
    },
      cart1: {
        height: 200,
        width: 300,
      }

    });