import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0073E6',
    marginBottom: 16,
    textAlign: 'center',
  },
  vagaContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  vagaNome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  vagaDescricao: {
    fontSize: 14,
    color: '#666',
    marginVertical: 4,
  },
  vagaSalario: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
    marginTop: 4,
  },
  vagaContato: {
    fontSize: 14,
    color: '#0073E6',
    marginTop: 4,
  },
});

export default styles;
