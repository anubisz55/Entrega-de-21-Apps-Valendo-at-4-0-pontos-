import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#ffffff', // Fundo branco como no GitHub
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  header: {
    width: '100%',
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: '#24292e', // Cor do cabeçalho do GitHub
    borderRadius: 6,
    marginBottom: 24,
    alignItems: 'center',
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: '600', 
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji', // Fonte do GitHub
  },

  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },

  input: {
    width: '100%', 
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e1e4e8', // Cor da borda dos inputs do GitHub
    borderRadius: 6,
    backgroundColor: '#ffffff', 
    marginBottom: 16,
    fontSize: 14,
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
    color: '#24292e', 
  },

  profileContainer: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#ffffff', 
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#e1e4e8', // Cor da borda dos cards do GitHub
    marginBottom: 16,
    width: '100%',
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },

  profileText: {
    fontSize: 14, 
    color: '#24292e', 
    marginBottom: 8,
    fontWeight: '400', 
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  button: {
    width: '48%',
    paddingVertical: 8,
    backgroundColor: '#2ea44f', // Cor verde dos botões do GitHub
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },

  // Estilos adicionais para elementos comuns no GitHub
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#24292e',
    marginBottom: 16,
    alignSelf: 'flex-start',
  },

  listItem: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
  },

  listItemText: {
    fontSize: 14,
    color: '#0366d6', // Cor dos links do GitHub
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
  },

  tabBar: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e4e8',
    marginBottom: 16,
  },

  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 8,
  },

  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#f9826c', // Cor de destaque do GitHub
  },

  tabText: {
    fontSize: 14,
    color: '#24292e',
    fontWeight: '500',
  },

  activeTabText: {
    color: '#24292e',
  },
});