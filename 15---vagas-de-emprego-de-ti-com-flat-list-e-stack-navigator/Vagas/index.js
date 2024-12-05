import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import styles from './styles';

const vagas = [
  { id: '1', titulo: 'Desenvolvedor Frontend', descricao: 'Vaga para desenvolvedor frontend com experiência em React.' },
  { id: '2', titulo: 'Desenvolvedor Backend', descricao: 'Vaga para desenvolvedor backend com experiência em Node.js.' },
  { id: '3', titulo: 'Analista de Sistemas', descricao: 'Vaga para analista de sistemas com foco em melhorias de processos.' },
  { id: '4', titulo: 'Gerente de Projetos', descricao: 'Vaga para gerente de projetos com experiência em metodologias ágeis.' },
  { id: '5', titulo: 'Engenheiro de Dados', descricao: 'Vaga para engenheiro de dados com conhecimento em Big Data.' },
];

const Vagas = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <View style={styles.vagaContainer}>
      <Text style={styles.titulo}>{item.titulo}</Text>
      <Button
        title="Saiba mais"
        onPress={() => navigation.navigate('Detalhes', { vaga: item })}
      />
    </View>
  );

  return (
    <FlatList
      data={vagas}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default Vagas;