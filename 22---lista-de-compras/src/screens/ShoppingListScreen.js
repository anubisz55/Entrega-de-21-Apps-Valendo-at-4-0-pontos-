import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import ShoppingItem from '../components/ShoppingItem';
import ShoppingInput from '../components/ShoppingInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { loadItems, saveItems } from '../storage/shoppingStorage';
import { styles } from '../styles/styles'; 

export default function ShoppingListScreen() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', quantity: '' });
  const [editingItemIndex, setEditingItemIndex] = useState(null);
  const [isAddingItem, setIsAddingItem] = useState(false); 

  useEffect(() => {
    loadItems().then(setShoppingList);
  }, []);

  const handleSaveItem = () => {
    if (newItem.name.trim() && newItem.quantity.trim()) {
      let updatedItems;
      if (editingItemIndex !== null) {
        updatedItems = [...shoppingList];
        updatedItems[editingItemIndex] = newItem;
        setEditingItemIndex(null);
      } else {
        updatedItems = [...shoppingList, newItem];
      }
      setShoppingList(updatedItems);
      saveItems(updatedItems);
      setNewItem({ name: '', quantity: '' });
      setIsAddingItem(false); 
    }
  };

  const handleEditItem = (index) => {
    setNewItem(shoppingList[index]);
    setEditingItemIndex(index);
    setIsAddingItem(true); 
  };

  const handleDeleteItem = (index) => {
    const updatedItems = shoppingList.filter((_, i) => i !== index);
    setShoppingList(updatedItems);
    saveItems(updatedItems);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={shoppingList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <ShoppingItem 
            item={item} 
            onEdit={() => handleEditItem(index)} 
            onDelete={() => handleDeleteItem(index)} 
          />
        )}
      />

      {isAddingItem && (
        <View style={styles.inputOverlay}>
          <ShoppingInput 
            newItem={newItem} 
            setNewItem={setNewItem} 
            onSave={handleSaveItem} 
            onCancel={() => {
              setNewItem({ name: '', quantity: '' });
              setIsAddingItem(false); 
            }}
          />
        </View>
      )}

      {!isAddingItem && (
        <TouchableOpacity style={styles.floatingButton} onPress={() => setIsAddingItem(true)}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}
