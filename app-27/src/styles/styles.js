import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFD1DC', // Cor de fundo rosa suave
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    marginBottom: 24,
    textAlign: 'center',
    fontFamily: 'Futura-Bold', // Fonte sem serifa moderna
    color: '#FF1493', // Cor neon rosa
    textShadowColor: 'rgba(255, 20, 147, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  form: {
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Fundo translúcido
    borderRadius: 16,
    padding: 16,
  },
  input: {
    borderWidth: 2,
    borderColor: '#FF69B4', // Rosa mais escuro
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#FFF0F5', // Rosa muito claro
    fontSize: 18,
    fontFamily: 'Helvetica-Neue',
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#FF69B4',
    backgroundColor: 'rgba(255, 182, 193, 0.3)', // Rosa claro translúcido
    borderRadius: 12,
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 20,
    flex: 1,
    fontFamily: 'Georgia',
    color: '#8B008B', // Roxo escuro
  },
  gradientBackground: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});