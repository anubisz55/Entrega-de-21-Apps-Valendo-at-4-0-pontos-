import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../styles/styles';

export default function DevProfile({ data }) {
  return (
    <View style={styles.profileContainer}>
      <Image source={{ uri: data.avatar_url }} style={styles.avatar} />

      <Text style={styles.profileText}>Id: {data.id}</Text>
      <Text style={styles.profileText}>Nome: {data.name || 'N/A'}</Text>
      <Text style={styles.profileText}>Repositórios: {data.public_repos}</Text>
      <Text style={styles.profileText}>Criado em: {new Date(data.created_at).toLocaleDateString()}</Text>
      <Text style={styles.profileText}>Seguidores: {data.followers}</Text>
      <Text style={styles.profileText}>Seguindo: {data.following}</Text>
    </View>
  );
}
