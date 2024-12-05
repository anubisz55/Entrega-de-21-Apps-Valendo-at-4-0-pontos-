import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Importar os componentes das telas
import RealToDollar from './src/screens/RealtoDollar';
import RealToEuro from './src/screens/RealtoEuro';
import RealToBitcoin from './src/screens/RealtoBitcoin';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Real para Dólar"  
        screenOptions={{
          tabBarActiveTintColor: '#00d2ff',
          tabBarInactiveTintColor: '#bdbdbd',
          tabBarStyle: {
            backgroundColor: '#1e1e2f',
          },
          tabBarIndicatorStyle: {
            backgroundColor: '#00d2ff',
          },
        }}
      >
        <Tab.Screen name="Real para Dólar" component={RealToDollar} />
        <Tab.Screen name="Real para Euro" component={RealToEuro} />
        <Tab.Screen name="Real para Bitcoin" component={RealToBitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
