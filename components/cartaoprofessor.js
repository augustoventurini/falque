import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'


export default function Professor({navigation}) {
    return (
        <View style= {styles.container}>
            <TouchableOpacity onPress= {() => navigation.navigate('Estudante')} style = {styles.voltar}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoprofessor/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Gratuidade')} style = {styles.ir}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoprofessor/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <View style = {styles.titulo}>
                <Text style = {styles.cartaoprofessor}>Cartão professor</Text>
            </View>

            <View style = {styles.cartao}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cartaoprofessor/cartaoprofessor.png')} style = {styles.cartaoprofessor1}/>
            </View>

            <View style = {styles.ocartao}>
                <Text style = {styles.ocartao1}>O cartão CriciumaCard Professor é a modalidade de venda antecipada mediante pagamento com desconto de 25% (vinte e cinco por cento).</Text>
            </View>

            <View style = {styles.para}>
                <Text style = {styles.para1}>Para o exercício da profissão o professor(a) tem o direito a uma compra mensal de créditos necessários ao seu deslocamento residência-escola-residência.</Text>
            </View>

            <View style = {styles.docnecessaria}>
                <Text style = {styles.documentonecessario}>Documentação necessária</Text>
            </View>

            <View style = {styles.seta}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoprofessor/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.declaracao}>
                <Text style = {styles.declaracao1}>Declaração fornecido pela instituição de ensino do exercício da profissão de professor e a comprovação do não recebimento de Vale-Transporte;</Text>
            </View>

            <View style = {styles.seta1}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoprofessor/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.carteira}>
                <Text style = {styles.carteira1}>Carteira de Identidade (RG) e CPF;</Text>
            </View>

            <View style = {styles.seta2}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoprofessor/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.comprovante}>
                <Text style = {styles.comprovante1}>Comprovante de residência recente, ou declaração do proprietário do imóvel, conforme modelo estabelecido pela associação;</Text>
            </View>

            <View style = {styles.uso}>
                <Text style = {styles.uso1}>O uso do cartão CriciúmaCard Professor é pessoal e intransferível, conforme decreto municipal 975/SA/2004 e SG/nº 1088/18.</Text>
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
          ir: {
            left: "43%",
            bottom: "13%",
          },
          voltar: {
            right: "43%",
            bottom: "11%",
            transform: [
                {rotateY: '180deg'},
                {scaleY: -1} 
            ]
          },
          titulo: {
            bottom: "16%"
          },
          cartaoprofessor: {
            fontFamily: "Roboto",
            fontSize: 26,
            fontWeight: "bold",
            color: "#2ecc71",
          },
          cartaoprofessor1: {
            bottom: "90%",
            width: 220,
            height: 125,
          },
          ocartao: {
            width: 300,
            bottom: "10%",
          },
          ocartao1: {
            fontSize: 12,
            textAlign: "center"
          },
          para: {
            width: 300,
            bottom: "5%",
          },
          para1: {
            fontSize: 12,
            textAlign: "center",
          },
          docnecessaria: {
            top: "0%",
            right: "23%"
          },
          documentonecessario: {
            fontWeight: "normal",
            color: "#2ecc71",
            fontFamily: "Roboto",
            fontSize: 13,
          },
          setaverde: {
            width: 15,
            height: 14
          },
          seta: {
            right: "42%",
            top: "3%",
          },
          seta1: {
            right: "42%",
            top: "5%",
          },
          seta2: {
            right: "42%",
            top: "10%",
          },
          declaracao: {
            width: 300,
            top: "1%",
          },
          declaracao1: {
            fontSize: 12,
            textAlign: "center",
          },
          carteira: {
            top: "3%",
            right: "12%",
          },
          carteira1: {
            fontSize: 12,
            textAlign: "center",
          },
          comprovante: {
            width: 300,
            top: "8%",
          },
          comprovante1: {
            fontSize: 12,
            textAlign: "center"
          },
          uso: {
            width: 300,
            top: "13%",
          },
          uso1: {
            fontSize: 12,
            textAlign: "center",
            color: "#666666"
          },
          botao1: {
            top: "16%",
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