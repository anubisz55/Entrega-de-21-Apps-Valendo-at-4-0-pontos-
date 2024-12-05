import React from 'react';
import { SafeAreaView } from 'react-native';
import CepScreen from './src/screens/CepScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CepScreen />
    </SafeAreaView>
  );
}
