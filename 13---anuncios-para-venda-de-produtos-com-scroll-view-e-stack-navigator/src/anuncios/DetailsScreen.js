import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

export default function DetailsScreen({ route }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.imageUrl }} style={styles.productDetailImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
}
