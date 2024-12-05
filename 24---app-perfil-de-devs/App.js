import React from 'react';
import { SafeAreaView } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfileScreen />
    </SafeAreaView>
  );
}
