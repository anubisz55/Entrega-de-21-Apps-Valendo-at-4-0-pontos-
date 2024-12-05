import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: 28,
    backgroundColor: '#1E1E1E', 
    borderRadius: 16,
    marginBottom: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },

  headerTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00FFFF', 
    textAlign: 'center',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 24,
    textAlign: 'center',
  },

  input: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#00FFFF', 
    borderRadius: 12,
    backgroundColor: '#2A2A2A', 
    marginBottom: 24,
    fontSize: 18,
    color: '#FFFFFF',
    fontFamily: 'Roboto',
  },

  resultContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#2A2A2A',
    borderRadius: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#00FFFF',
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
  },

  resultText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 12,
    fontFamily: 'Roboto',
  },

  gradientButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    marginTop: 24,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});