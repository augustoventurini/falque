import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import Inicio from 'C:/Users/Augusto/falquee/components/inicio.js';
import Login from 'C:/Users/Augusto/falquee/components/login.js';
import Cadastro from 'C:/Users/Augusto/falquee/components/cadastro.js';
import Cidadao from 'C:/Users/Augusto/falquee/components/cartaocidadao.js';
import Estudante from 'C:/Users/Augusto/falquee/components/cartaoestudante.js';
import Professor from 'C:/Users/Augusto/falquee/components/cartaoprofessor.js';
import Gratuidade from 'C:/Users/Augusto/falquee/components/cartaogratuidade.js';
import Idoso from 'C:/Users/Augusto/falquee/components/cartaoidoso.js';
import Home from 'C:/Users/Augusto/falquee/components/home.js';
import CadastroSecundario from 'C:/Users/Augusto/falquee/components/cadastrosecundario.js';
import Bilhetagem from 'C:/Users/Augusto/falquee/components/bilhetagem.js';
import Tarifas from 'C:/Users/Augusto/falquee/components/tarifas.js';
import Processo from 'C:/Users/Augusto/falquee/components/processoconcluido.js';
import Perfil from 'C:/Users/Augusto/falquee/components/perfil.js';
import Horario from 'C:/Users/Augusto/falquee/components/horarios.js';
import Anta from 'C:/Users/Augusto/falquee/components/anta.js';


import NativeAccessibilityInfo from 'react-native/Libraries/Components/AccessibilityInfo/NativeAccessibilityInfo';

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Inicio' component={Inicio} options = {{headerShown : false}} />
        <Stack.Screen name = 'Login' component={Login} options = {{headerShown : false}} />
        <Stack.Screen name = 'Cadastro' component={Cadastro} options = {{headerShown : false}} /> 
        <Stack.Screen name = 'Cadastrosecundario' component={CadastroSecundario} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Cidadao' component={Cidadao} options = {{headerShown: false}} />
        <Stack.Screen name = 'Estudante' component={Estudante} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Professor' component={Professor} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Gratuidade' component={Gratuidade} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Idoso' component={Idoso} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Home' component={Home} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Bilhetagem' component={Bilhetagem} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Tarifas' component={Tarifas} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Processo' component={Processo} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Perfil' component={Perfil} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Horario' component={Horario} options = {{headerShown: false}}/>
        <Stack.Screen name = 'Anta' component={Anta} options = {{headerShown: false}}/>       
      </Stack.Navigator>
    </NavigationContainer>
    //<Perfil/>
    
   

  );
}


