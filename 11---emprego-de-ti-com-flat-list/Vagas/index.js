import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';

const vagas = [
  { id: '1', nome: 'Desenvolvedor Front-end', descricao: 'Experiência com React e CSS.', salario: 'R$ 4.000', contato: 'contato@empresa.com' },
  { id: '2', nome: 'Desenvolvedor Back-end', descricao: 'Conhecimento em Node.js e bancos de dados.', salario: 'R$ 5.500', contato: 'contato@empresa.com' },
  { id: '3', nome: 'Analista de Segurança da Informação', descricao: 'Certificação em segurança é um diferencial.', salario: 'R$ 6.000', contato: 'contato@empresa.com' },
  { id: '4', nome: 'Suporte Técnico', descricao: 'Atendimento ao cliente e resolução de problemas técnicos.', salario: 'R$ 3.200', contato: 'contato@empresa.com' },
];

export default function Vagas() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>FreeTec - Vagas de TI</Text>
      <FlatList
        data={vagas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.vagaContainer}>
            <Text style={styles.vagaNome}>{item.nome}</Text>
            <Text style={styles.vagaDescricao}>{item.descricao}</Text>
            <Text style={styles.vagaSalario}>Salário: {item.salario}</Text>
            <Text style={styles.vagaContato}>Contato: {item.contato}</Text>
          </View>
        )}
      />
    </View>
  );
}
