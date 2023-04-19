import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image , TouchableOpacity, Button, TouchableHighlight, ScrollView} from 'react-native';
import { AntDesign, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import { PageScrollView } from 'pagescrollview'



export default function Estudante({navigation}) {
    return (
    <PageScrollView>
        <View style= {styles.container}>
            
            <TouchableOpacity onPress= {() => navigation.navigate('Cidadao')} style = {styles.voltar}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <TouchableOpacity onPress= {() => navigation.navigate('Professor')} style = {styles.ir}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </TouchableOpacity>

            <View style = {styles.titulo}>
                <Text style = {styles.cartaoestudante}>Cartão estudante</Text>
            </View>

            <View style = {styles.cartao}>
                <Image source={require('C:/Users/Augusto/falquee/assets/cartaoestudante/cartaoestudante.png')} style = {styles.cartaoestudante1}/>
            </View>

            <View style = {styles.texto1}>
                <Text style = {styles.texto1a}>O cartão CriciumaCard estudante é a modalidade de venda antecipada de 
                créditos mediante pagamento com desconto de 50% (cinquenta por cento).</Text>
            </View>

            <View style = {styles.texto2}>
                <Text style = {styles.texto2a}>O aluno regularmente matriculado no ensino fundamental, médio ou superior tem o direito a duas compras mensais de créditos conforme pré-estabelecidos necessários ao seu deslocamento 
                residência-escola-residência, somente em dias letivos. Para as compras posteriores, deve ser observados os créditos remanescentes.</Text>
            </View>

            <View style = {styles.texto3}>
                <Text style = {styles.texto3a}>O número de créditos poderá ser ampliado mediante comprovação da grade curricular obrigatória, pela instituição de ensino.</Text>
            </View>

            <View style = {styles.docnecessaria}>
                <Text style = {styles.documentonecessario}>Documentação necessária</Text>
            </View>
            
            <View style = {styles.seta}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.atestado}>
                <Text style = {styles.atestado1}>Atestado de matrícula emitido por instituição educacional reconhecida pelo Ministério da Educação ou pelas Secretarias de Educação;</Text>
            </View>

            <View style = {styles.seta1}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.comprovante}>
                <Text style = {styles.comprovante1}>Comprovante de residência recente (inferior a três meses), podendo ser a fatura de água, luz, telefone fixo ou contrato de locação em nome próprio ou dos pais ou responsáveis, ou, no caso de imóvel alugado, declaração do proprietário do imóvel, conforme modelo estabelecido pela associação.</Text>
            </View>

            <View style = {styles.seta2}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.carteira}>
                <Text style = {styles.carteira1}>Carteira de identidade (RG) ou certidão de nascimento e CPF.</Text>
            </View>

            <View style = {styles.seta3}>
                <Image source = {require('C:/Users/Augusto/falquee/assets/cartaoestudante/seta.png')} style = {styles.setaverde} />
            </View>

            <View style = {styles.menor}>
                <Text style = {styles.menor1}>Menor de 18 anos deve ser acompanhado de pai ou mãe ou responsável legal para assinatura do termo de uso do cartão;</Text>
            </View>
            
         <View style = {styles.botao1}>
          <TouchableOpacity onPress= {() => navigation.navigate('Cadastrosecundario')} style = {styles.botaoestilo}>
            <Text style = {styles.textobotao1}>Selecionar</Text>
          </TouchableOpacity>
         </View>

         
         
        </View>
     </PageScrollView>
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
        left: "45%",
        bottom: "3%",
      },
      voltar: {
        right: "45%",
        bottom: "1%",
        transform: [
            {rotateY: '180deg'},
            {scaleY: -1} 
        ]
      },
      titulo: {
        bottom: "6%"
      },
      cartaoestudante: {
        fontFamily: "Roboto",
        fontSize: 26,
        fontWeight: "bold",
        color: "#2ecc71",
      },
      cartaoestudante1: {
        bottom: "30%",
        width: 328,
        height: 125,
      },
      texto1: {
        height: 50,
        bottom: "2%",
      },
      texto1a: {
        textAlign: "center",
        fontSize: 13,
      },
      texto2: {
        height: 91,
        bottom: "1%",
      },
      texto2a: {
        textAlign: "center",
        fontSize: 13,
      },
      texto3: {
        height: 50,
        bottom: "0%",
      },
      texto3a: {
        textAlign: "center",
        fontSize: 13,
      },
      docnecessaria: {
        bottom: "0%",
        right: "23%"
      },
      documentonecessario: {
        fontWeight: "normal",
        color: "#2ecc71",
        fontFamily: "Roboto",
        fontSize: 13,
      },
      seta: {
        right: "40.5%",
        top: "3%",
      },
      seta1: {
        right: "40.5%",
        top: "3%",
      },
      seta2: {
        right: "40.5%",
        top: "3%",
      },
      seta3: {
        right: "40.5%",
        top: "5%",
      },
      setaverde: {
        width: 15,
        height: 14
      },
      atestado: {
        top: "1%",
        left: "1%",
        width: 300
      },
      atestado1: {
        fontSize: 12,
        textAlign: "center",
      },
      comprovante: {
        width: 300,
        top: "1%"
      },
      comprovante1: {
        fontSize: 12,
        textAlign: "center",
      },
      carteira: {
        top: "1%",
        left: "5%",
      },
      carteira1: {
        fontSize: 12,
        textAlign: "center",
      },
      menor: {
        width: 200,
        top: "3%",
        
      },
      menor1: {
        fontSize: 12,
        textAlign: "center",
      },
      botao1: {
        top: "6%",
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