import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vagas from './src/Vagas';
import Detalhes from './src/Vagas/Detalhes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Vagas">
        <Stack.Screen 
          name="Vagas" 
          component={Vagas} 
          options={{ title: 'FreeTec - Vagas de TI' }} 
        />
        <Stack.Screen 
          name="Detalhes" 
          component={Detalhes} 
          options={{ title: 'Detalhes da Vaga' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
