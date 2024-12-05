import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './styles';

export default function Moeda() {
  const [valor, setValor] = useState('');
  const [moedaOrigem, setMoedaOrigem] = useState('BRL');
  const [moedaDestino, setMoedaDestino] = useState('USD');
  const [resultado, setResultado] = useState('');
  const [loading, setLoading] = useState(false);

  // Taxas de câmbio fixas (em produção, você usaria uma API de câmbio real)
  const taxas = {
    BRL: 1.0,
    USD: 0.20,
    EUR: 0.19,
    GBP: 0.16,
    JPY: 30.42,
    ARS: 169.73,
  };

  const moedas = {
    BRL: 'Real Brasileiro',
    USD: 'Dólar Americano',
    EUR: 'Euro',
    GBP: 'Libra Esterlina',
    JPY: 'Iene Japonês',
    ARS: 'Peso Argentino',
  };

  const converterMoeda = () => {
    if (!valor) {
      setResultado('Digite um valor para converter');
      return;
    }

    setLoading(true);

    // Simula uma chamada de API
    setTimeout(() => {
      const valorNumerico = parseFloat(valor.replace(',', '.'));
      if (isNaN(valorNumerico)) {
        setResultado('Digite um valor válido');
        setLoading(false);
        return;
      }

      // Converte para a moeda de destino
      const valorEmReais = valorNumerico / taxas[moedaOrigem];
      const valorConvertido = valorEmReais * taxas[moedaDestino];

      setResultado(`${valorNumerico} ${moedaOrigem} = ${valorConvertido.toFixed(2)} ${moedaDestino}`);
      setLoading(false);
    }, 1000);
  };

  const trocarMoedas = () => {
    const temp = moedaOrigem;
    setMoedaOrigem(moedaDestino);
    setMoedaDestino(temp);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>Conversor de Moedas</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Valor</Text>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={valor}
                onChangeText={setValor}
                placeholder="Digite o valor"
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.conversorContainer}>
              <View style={styles.pickerContainer}>
                <Text style={styles.label}>De</Text>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={moedaOrigem}
                    onValueChange={setMoedaOrigem}
                    style={styles.picker}
                  >
                    {Object.entries(moedas).map(([sigla, nome]) => (
                      <Picker.Item key={sigla} label={`${sigla} - ${nome}`} value={sigla} />
                    ))}
                  </Picker>
                </View>
              </View>

              <TouchableOpacity 
                style={styles.swapButton}
                onPress={trocarMoedas}
              >
                <MaterialIcons name="swap-horiz" size={24} color="#4CAF50" />
              </TouchableOpacity>

              <View style={styles.pickerContainer}>
                <Text style={styles.label}>Para</Text>
                <View style={styles.pickerWrapper}>
                  <Picker
                    selectedValue={moedaDestino}
                    onValueChange={setMoedaDestino}
                    style={styles.picker}
                  >
                    {Object.entries(moedas).map(([sigla, nome]) => (
                      <Picker.Item key={sigla} label={`${sigla} - ${nome}`} value={sigla} />
                    ))}
                  </Picker>
                </View>
              </View>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={converterMoeda}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={styles.buttonText}>Converter</Text>
              )}
            </TouchableOpacity>

            {resultado ? (
              <View style={styles.resultadoContainer}>
                <Text style={styles.resultadoText}>{resultado}</Text>
              </View>
            ) : null}
          </View>

          <Text style={styles.disclaimer}>
            * As taxas de câmbio são apenas para demonstração.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}