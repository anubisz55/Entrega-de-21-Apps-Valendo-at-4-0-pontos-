import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Vagas from './Vagas';
import { View, Text } from 'react-native';

const Stack = createStackNavigator();

const Detalhes = ({ route }) => {
  const { vaga } = route.params;
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{vaga.titulo}</Text>
      <Text style={{ marginTop: 10 }}>{vaga.descricao}</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Vagas">
        <Stack.Screen name="Vagas" component={Vagas} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}