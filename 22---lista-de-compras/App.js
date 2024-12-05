import React from 'react';
import { SafeAreaView } from 'react-native';
import ShoppingListScreen from './src/screens/ShoppingListScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ShoppingListScreen />
    </SafeAreaView>
  );
}
