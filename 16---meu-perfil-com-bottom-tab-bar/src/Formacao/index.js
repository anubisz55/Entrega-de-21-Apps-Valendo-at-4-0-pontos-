import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Formacao() {
  return (
    <View style={styles.container}>
      <Icon name="school" size={80} color="#4CAF50" />
      <Text style={styles.title}>Formação Acadêmica</Text>
      <Text style={styles.course}>Análise e Desenvolvimento de Sistemas</Text>
      <Text style={styles.institution}>Fatec Praia Grande</Text>
      <Text style={styles.period}>2022 - 2025</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
  },
  course: {
    fontSize: 18,
    color: '#4CAF50',
    marginTop: 10,
    fontWeight: 'bold',
  },
  institution: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  period: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
});