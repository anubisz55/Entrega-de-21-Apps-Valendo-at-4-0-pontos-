import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000', 
  },

  movieCard: {
    marginBottom: 24,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.05)', 
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#00ffff', 
  },

  movieTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 12,
    color: '#00ffff', 
    fontFamily: 'Orbitron',
  },

  movieImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#00ffff', 
  },

  movieSynopsis: {
    fontSize: 16,
    color: '#ffffff', 
    lineHeight: 24,
    marginBottom: 20,
    fontFamily: 'Roboto Mono', 
  },

  moreButton: {
    alignSelf: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#00ffff', 
    borderRadius: 30,
  },

  moreButtonText: {
    color: '#00ffff', 
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Orbitron',
  },

  // Novos estilos
  header: {
    backgroundColor: 'transparent',
    paddingVertical: 20,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#00ffff', 
  },

  headerTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#00ffff', 
    textAlign: 'center',
    fontFamily: 'Orbitron',
  },

  searchInput: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderWidth: 1,
    borderColor: '#00ffff', 
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 24,
    fontFamily: 'Roboto Mono',
  },

  categoryTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },

  categoryTab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00ffff', 
  },

  activeTab: {
    backgroundColor: '#00ffff',
  },

  tabText: {
    color: '#00ffff', 
    fontSize: 14,
    fontFamily: 'Orbitron',
  },

  activeTabText: {
    color: '#000000',
  },
});