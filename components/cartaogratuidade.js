import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'


export default function Gratuidade({navigation}) {
    return (
        <View style= {styles.container}>
            <TouchableOpacity onPress= {() => navigation.navigate('Professor')} style = {styles.voltar}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Idoso')} style = {styles.ir}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <View style = {styles.titulo}>
                <Text style = {styles.cartaogratuidade}>Cartão gratuidade</Text>
            </View>

            <View style = {styles.cartao}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cartaogratuidade/cartaogratuidade.png')} style = {styles.cartaogratuidade1}/>
            </View>

            <View style = {styles.ocartao}>
                <Text style = {styles.ocartao1}>O Cartão CriciúmaCard Gratuidade é destinado aos Policiais Militares fardados, e em serviço, Oficial de Justiça em serviço, Carteiros no exercício da atividade e profissionais da DDT - Diretoria de Trânsito e Transporte, no exercício das atividades.</Text>
            </View>

            <View style = {styles.docnecessaria}>
                <Text style = {styles.documentonecessario}>Documentação necessária</Text>
            </View>

            <View style = {styles.seta}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.documentacao}>
                <Text style = {styles.documentacao1}>Documentação pessoal</Text>
            </View>

            <View style = {styles.seta1}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.carteira}>
                <Text style = {styles.carteira1}>Carteira de identificação profissional</Text>
            </View>

            <View style = {styles.seta2}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.para}>
                <Text style = {styles.para1}>Para retirada do cartão é necessário apresentar documento de identificação com foto.</Text>
            </View>

            <View style = {styles.seta3}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaogratuidade/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.pagamento}>
                <Text style = {styles.pagamento1}>Pagamento da taxa de segunda via no valor de R$ 14,00 (quatorze reais).</Text>
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
            backgroundColor: '#FFFFFF',
            alignItems: 'center',
            justifyContent: 'center',
          },
          ir: {
            left: "43%",
            bottom: "16%",
          },
          voltar: {
            right: "43%",
            bottom: "14%",
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
            bottom: "19%"
          },
          cartaogratuidade: {
            fontFamily: "Roboto",
            fontSize: 26,
            fontWeight: "bold",
            color: "#2ecc71",
          },
          cartaogratuidade1: {
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
          docnecessaria: {
            bottom: "13%",
            right: "23%"
          },
          documentonecessario: {
            fontWeight: "normal",
            color: "#2ecc71",
            fontFamily: "Roboto",
            fontSize: 13,
          },
          seta: {
            bottom: "9%",
            right: "42%",
          },
          documentacao: {
            bottom: "11%",
            right: "20%"
          },
          documentacao1: {
            fontSize: 12,
            textAlign: "center",
          },
          seta1: {
            bottom: "2%",
            right: "42%",
          },
          carteira: {
            bottom: "4%",
            right: "12%",
          },
          carteira1: {
            fontSize: 12,
            textAlign: "center",
          },
          seta2: {
            top: "5%",
            right: "42%",
          },
          para: {
            width: 300,
            top: "3%",
            right:"4%",
          },
          para1: {
            fontSize: 12,
            textAlign: "center"
          },
          seta3: {
            top: "10%",
            right: "42%",
          },
          pagamento: {
            width: 250,
            top: "8%",
            right: "5%",
          },
          pagamento1: {
            fontSize: 12,
            textAlign: "center",
          },
          botao1: {
            top: "19%",
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