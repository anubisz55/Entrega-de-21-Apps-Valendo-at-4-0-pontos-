import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#1E1E1E', 
  },
  
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#00FFFF', 
    marginBottom: 30,
    textAlign: 'center',
    fontFamily: 'Futura',
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 16,
    backgroundColor: '#FFFFFF', 
    borderRadius: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#00FFFF', 
  },

  taskText: {
    fontSize: 18,
    color: '#FFFFFF', 
    fontFamily: 'Helvetica Neue', 
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 20,
  },

  inputContainer: {
    marginBottom: 24,
    backgroundColor: '#2A2A2A', 
    borderRadius: 16,
    overflow: 'hidden',
  },

  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: 'transparent', 
    color: '#FFFFFF', 
    fontSize: 18,
    fontFamily: 'Helvetica Neue',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },

  floatingButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: '#00FFFF',
    borderRadius: 30,
    padding: 20,
    shadowColor: '#00FFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  buttonCancel: {
    backgroundColor: '#FF4136', 
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonSave: {
    backgroundColor: '#00FFFF', 
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
  },
});