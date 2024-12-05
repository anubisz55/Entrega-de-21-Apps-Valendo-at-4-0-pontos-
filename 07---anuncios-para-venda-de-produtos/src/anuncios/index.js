import React, { useState } from 'react';
import { View, Text, FlatList, Image, Dimensions, Animated } from 'react-native';
import styles from './styles';

const products = [
  { id: 1, name: "Batom Hidratante", description: "Hidratação intensa para os lábios.", price: "R$ 30,00", imageUrl: "https://d3kqa2vk8m4sbm.cloudfront.net/Custom/Content/Products/46/88/46880_payot-batom-hidratante-rosa-3-6g-pr-8560-48601-payot_l2_638193390781773671.jpg" },
  { id: 2, name: "Base Facial", description: "Cobertura leve e uniforme.", price: "R$ 50,00", imageUrl: "https://marimaria.vteximg.com.br/arquivos/ids/164961/Base-e-corretivo-matte-velvet-skin-nude-mari-maria-make-up.png?v=638457705282370000" },
  { id: 3, name: "Máscara de Cílios", description: "Volume e definição para os cílios.", price: "R$ 40,00", imageUrl: "https://img.lojasrenner.com.br/item/543198471/large/1.jpg" },
  { id: 4, name: "Sombra Iluminadora", description: "Realce o olhar com um toque de brilho.", price: "R$ 25,00", imageUrl: "https://res.cloudinary.com/beleza-na-web/image/upload/w_1500,f_auto,fl_progressive,q_auto:eco,w_800/v1/imagens/5/catharine-hill-iluminador-metalic-collection-sunshine-sombra-cintilante-4g-38481-2733001503961756960.jpg" },
  { id: 5, name: "Pó Compacto", description: "Acabamento matte e suave para o rosto.", price: "R$ 35,00", imageUrl: "https://down-br.img.susercontent.com/file/sg-11134201-7rbk0-lkmsiikbj66o7f" },
];

const Product = ({ product, isActive }) => {
  const scale = isActive ? 1.1 : 1;
  return (
    <Animated.View style={[styles.productContainer, { transform: [{ scale }] }, isActive && styles.activeProduct]}>
      <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{product.price}</Text>
    </Animated.View>
  );
};

export default function Anuncios() {
  const [activeIndex, setActiveIndex] = useState(0);

  const onScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <Product product={item} isActive={index === activeIndex} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
    </View>
  );
}
