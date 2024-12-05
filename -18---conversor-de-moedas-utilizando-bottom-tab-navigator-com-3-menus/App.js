import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RealDolar from './Conversor/RealDolar';
import RealEuro from './Conversor/RealEuro';
import RealBitcoin from './Conversor/RealBitcoin';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Real -> Dólar') {
              iconName = 'attach-money';
            } else if (route.name === 'Real -> Euro') {
              iconName = 'euro-symbol';
            } else if (route.name === 'Real -> Bitcoin') {
              iconName = 'currency-bitcoin';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#4CAF50',
          tabBarInactiveTintColor: '#888',
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopWidth: 0,
            elevation: 10,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginBottom: 5,
          },
        })}
      >
        <Tab.Screen name="Real -> Dólar" component={RealDolar} />
        <Tab.Screen name="Real -> Euro" component={RealEuro} />
        <Tab.Screen name="Real -> Bitcoin" component={RealBitcoin} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}