import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DadosPessoais from './src/ContaBank/DadosPessoais';
import DadosBancarios from './src/ContaBank/DadosBancarios';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2196F3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="DadosPessoais" 
          component={DadosPessoais}
          options={{
            title: 'Dados Pessoais',
          }}
        />
        <Stack.Screen 
          name="DadosBancarios" 
          component={DadosBancarios}
          options={{
            title: 'Dados Bancários',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
