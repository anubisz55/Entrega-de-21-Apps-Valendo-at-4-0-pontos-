import AsyncStorage from '@react-native-async-storage/async-storage';

export const loadItems = async () => {
  try {
    const storedItems = await AsyncStorage.getItem('shopping_items');
    return storedItems ? JSON.parse(storedItems) : [];
  } catch (error) {
    console.error('Erro ao carregar itens', error);
    return [];
  }
};

export const saveItems = async (items) => {
  try {
    await AsyncStorage.setItem('shopping_items', JSON.stringify(items));
  } catch (error) {
    console.error('Erro ao salvar itens', error);
  }
};
