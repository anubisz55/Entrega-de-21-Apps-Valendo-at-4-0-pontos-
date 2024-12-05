import { StyleSheet, Dimensions } from 'react-native';

const cardWidth = Dimensions.get('window').width * 0.8;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5',
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#8e24aa', // Lilás forte
    textAlign: 'center',
    marginBottom: 15,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 15,
    width: cardWidth,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#e1bee7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeProduct: {
    borderColor: '#ab47bc',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
    transform: [{ scale: 1.05 }],
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginTop: 5,
    textAlign: 'center',
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8e24aa',
    marginTop: 5,
  },
});
