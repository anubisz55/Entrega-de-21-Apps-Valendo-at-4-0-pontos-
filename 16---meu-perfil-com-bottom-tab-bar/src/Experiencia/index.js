import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Experiencia() {
  return (
    <View style={styles.container}>
      <Icon name="work" size={80} color="#4CAF50" />
      <Text style={styles.title}>Experiência Profissional</Text>

      <View style={styles.experienceItem}>
        <Text style={styles.position}>Assistente Administrativo</Text>
        <Text style={styles.company}>Hospitais CEO, SAE, CTA</Text>
        <Text style={styles.dates}>2021</Text>
      </View>

      <View style={styles.experienceItem}>
        <Text style={styles.position}>Aprendiz de Suporte em TI</Text>
        <Text style={styles.company}>TSA Cargo</Text>
        <Text style={styles.dates}>2024</Text>
      </View>
      
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
  experienceItem: {
    marginTop: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
    width: '100%',
  },
  position: {
    fontSize: 18,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  company: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  dates: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
});