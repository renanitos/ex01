import React from 'react';
import { View, Text, Image} from 'react-native';

function App(){
  return(
    <View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{marginTop: 25}}>Meu Perfil Profssional</Text>
        <Image
            source={{ uri: 'https://avatars.githubusercontent.com/u/81490691?v=4' }}
            style={{width: 120, height: 120, marginTop: 10}}
        />
      </View>

      <View style={{marginLeft: 5}}>
        <Text style={{color: 'red', marginTop: 15}}>Dados pessoais:</Text>
        <Text>Maria Eduarda, 21 anos, Desenvolvedora junior</Text>

        <Text style={{color: 'red', marginTop: 15}}>Formação:</Text>
        <Text>Tecnico de segurança do trabalho - ETEC</Text>
        <Text>ADS - FATEC (cursando)</Text>

        <Text style={{color: 'red', marginTop: 15}}>Experiência:</Text>
        <Text>Assistente de desenvolvimento - Gupy</Text>
        <Text>Desenvolvedor juior - Gupy</Text>

        <Text style={{color: 'red', marginTop: 15}}>Projetos:</Text>
        <Text>Sistema de gestão de de desempenho - Vydra</Text>
      </View>
    </View>
  )
}

export default App;