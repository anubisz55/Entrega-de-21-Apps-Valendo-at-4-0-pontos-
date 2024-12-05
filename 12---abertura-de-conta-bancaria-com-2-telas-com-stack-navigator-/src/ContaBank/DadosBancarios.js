import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function DadosBancarios({ route, navigation }) {
  const { dadosPessoais } = route.params;
  const [formData, setFormData] = useState({
    tipoConta: 'corrente',
    perfil: 'conservador',
    numeroConta: '',
    agencia: '',
    observacoes: ''
  });

  const updateFormData = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = () => {
    // Combinando dados pessoais com dados bancários
    const dadosCompletos = {
      ...dadosPessoais,
      ...formData
    };

    // Em uma aplicação real, você enviaria esses dados para seu backend
    console.log('Dados completos:', dadosCompletos);

    Alert.alert(
      'Sucesso',
      'Solicitação de abertura de conta enviada com sucesso!\nEntraremos em contato em breve.',
      [
        { 
          text: 'OK', 
          onPress: () => {
            // Volta para a tela inicial e reseta a navegação
            navigation.reset({
              index: 0,
              routes: [{ name: 'DadosPessoais' }],
            });
          }
        }
      ]
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Dados Bancários</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Tipo de Conta</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.tipoConta}
                onValueChange={(value) => updateFormData('tipoConta', value)}
                style={styles.picker}
                enabled={true}
              >
                <Picker.Item label="Conta Corrente" value="corrente" />
                <Picker.Item label="Conta Poupança" value="poupanca" />
                <Picker.Item label="Conta Salário" value="salario" />
                <Picker.Item label="Conta Digital" value="digital" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Perfil de Investidor</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.perfil}
                onValueChange={(value) => updateFormData('perfil', value)}
                style={styles.picker}
                enabled={true}
              >
                <Picker.Item label="Conservador" value="conservador" />
                <Picker.Item label="Moderado" value="moderado" />
                <Picker.Item label="Arrojado" value="arrojado" />
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Número da Conta (opcional)</Text>
            <TextInput
              style={styles.input}
              value={formData.numeroConta}
              onChangeText={(value) => updateFormData('numeroConta', value)}
              placeholder="Digite o número da conta, se já possuir"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Agência (opcional)</Text>
            <TextInput
              style={styles.input}
              value={formData.agencia}
              onChangeText={(value) => updateFormData('agencia', value)}
              placeholder="Digite sua agência preferencial"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Observações (opcional)</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={formData.observacoes}
              onChangeText={(value) => updateFormData('observacoes', value)}
              placeholder="Adicione alguma observação se necessário"
              multiline
              numberOfLines={4}
            />
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Informações da Conta</Text>
            <Text style={styles.infoText}>
              • Conta Corrente: Movimentação diária, cartão de débito e cheque
            </Text>
            <Text style={styles.infoText}>
              • Conta Poupança: Rendimento da poupança, ideal para guardar dinheiro
            </Text>
            <Text style={styles.infoText}>
              • Conta Salário: Recebimento de salário com isenção de taxas
            </Text>
            <Text style={styles.infoText}>
              • Conta Digital: Sem taxas de manutenção, gerenciamento pelo app
            </Text>
          </View>

          <TouchableOpacity 
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Finalizar Cadastro</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}