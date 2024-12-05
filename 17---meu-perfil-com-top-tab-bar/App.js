import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Perfil from './src/Perfil';
import Formacao from './src/Formacao';
import Experiencia from './src/Experiencia';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'Pessoal') {
              iconName = 'person-outline';
            } else if (route.name === 'Formação') {
              iconName = 'school';
            } else if (route.name === 'Experiência') {
              iconName = 'work-outline';
            }
            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#888',
          tabBarShowIcon: true,
          tabBarIndicatorStyle: {
            backgroundColor: '#4CAF50',
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            elevation: 5,
          },
        })}
      >
        <Tab.Screen name="Pessoal" component={Perfil} />
        <Tab.Screen name="Formação" component={Formacao} />
        <Tab.Screen name="Experiência" component={Experiencia} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}