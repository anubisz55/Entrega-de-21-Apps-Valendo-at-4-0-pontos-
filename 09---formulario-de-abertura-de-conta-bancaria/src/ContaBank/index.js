import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform 
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { TextInputMask } from 'react-native-masked-text';
import styles from './styles';

export default function ContaBank() {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [renda, setRenda] = useState('');
  const [tipoConta, setTipoConta] = useState('corrente');

  const handleSubmit = () => {
    // Validação básica
    if (!nome || !cpf || !email || !telefone || !dataNascimento || !endereco) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados para seu backend
    Alert.alert(
      'Sucesso',
      'Solicitação de abertura de conta enviada com sucesso!\nEntraremos em contato em breve.',
      [{ text: 'OK', onPress: () => limparFormulario() }]
    );
  };

  const limparFormulario = () => {
    setNome('');
    setCpf('');
    setEmail('');
    setTelefone('');
    setDataNascimento('');
    setEndereco('');
    setRenda('');
    setTipoConta('corrente');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Abertura de Conta</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome Completo *</Text>
            <TextInput
              style={styles.input}
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome completo"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>CPF *</Text>
            <TextInputMask
              type={'cpf'}
              style={styles.input}
              value={cpf}
              onChangeText={setCpf}
              placeholder="000.000.000-00"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email *</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="seu@email.com"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Telefone *</Text>
            <TextInputMask
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              style={styles.input}
              value={telefone}
              onChangeText={setTelefone}
              placeholder="(00) 00000-0000"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Data de Nascimento *</Text>
            <TextInputMask
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              style={styles.input}
              value={dataNascimento}
              onChangeText={setDataNascimento}
              placeholder="DD/MM/AAAA"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Endereço Completo *</Text>
            <TextInput
              style={styles.input}
              value={endereco}
              onChangeText={setEndereco}
              placeholder="Rua, número, complemento, cidade, estado"
              multiline
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Renda Mensal</Text>
            <TextInputMask
              type={'money'}
              options={{
                precision: 2,
                separator: ',',
                delimiter: '.',
                unit: 'R$ ',
                suffixUnit: ''
              }}
              style={styles.input}
              value={renda}
              onChangeText={setRenda}
              placeholder="R$ 0,00"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de Conta</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={tipoConta}
                onValueChange={setTipoConta}
                style={styles.picker}
              >
                <Picker.Item label="Conta Corrente" value="corrente" />
                <Picker.Item label="Conta Poupança" value="poupanca" />
                <Picker.Item label="Conta Salário" value="salario" />
              </Picker>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Enviar Solicitação</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
