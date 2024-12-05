import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from './styles';

export default function Vagas() {
  const vagas = [
    { 
      nome: 'Desenvolvedor Front-End', 
      descricao: 'Desenvolvimento de interfaces web com React.', 
      salario: 'R$ 4.000 - R$ 6.000', 
      contato: 'email@empresa.com'
    },
    {
      nome: 'Analista de Suporte', 
      descricao: 'Atendimento e suporte técnico aos usuários.', 
      salario: 'R$ 2.500 - R$ 3.500', 
      contato: 'contato@empresa.com'
    },
    {
      nome: 'Engenheiro de Dados', 
      descricao: 'Construção e manutenção de pipelines de dados.', 
      salario: 'R$ 7.000 - R$ 9.000', 
      contato: 'recrutamento@empresa.com'
    },
        {
      nome: 'Desenvolvedor Back-end', 
      descricao: 'Desenvolvimento de APIs e lógica de servidor para aplicações web.', 
      salario: 'R$ 7.500', 
      contato: 'recrutamento@empresa.com'
    },    {
      nome: 'Engenheiro de DevOps', 
      descricao: 'Construção e manutenção de pipelines de dados.', 
      salario: 'R$ 11.000', 
      contato: 'recrutamento@empresa.com'
    },    {
      nome: 'Gerente de TI', 
      descricao: 'Gerenciamento da equipe de TI e projetos tecnológicos.', 
      salario: 'R$ 12.000', 
      contato: 'recrutamento@empresa.com'
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>FreeTec</Text>
      <Text style={styles.fraseImpacto}>Conectando talentos ao futuro da tecnologia</Text>
      {vagas.map((vaga, index) => (
        <View key={index} style={styles.vagaContainer}>
          <Text style={styles.nomeVaga}>{vaga.nome}</Text>
          <Text style={styles.descricao}>{vaga.descricao}</Text>
          <Text style={styles.salario}>Salário: {vaga.salario}</Text>
          <Text style={styles.contato}>Contato: {vaga.contato}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
