import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF', 
  },
  
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#003399', 
    marginBottom: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: '#F0F0F0', 
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: '#FF0000', 
  },

  taskText: {
    fontSize: 16,
    color: '#333333', 
    fontFamily: 'Arial',
  },

  iconContainer: {
    flexDirection: 'row',
    gap: 16,
  },

  inputContainer: {
    marginBottom: 20,
    backgroundColor: '#F0F0F0', 
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },

  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#333333',
    fontFamily: 'Arial',
  },

  floatingButton: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: '#FF0000', 
    borderRadius: 30,
    padding: 16,
    elevation: 4,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  buttonCancel: {
    backgroundColor: '#CCCCCC', 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: '48%',
  },

  buttonSave: {
    backgroundColor: '#003399', 
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    width: '48%',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Arial',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});