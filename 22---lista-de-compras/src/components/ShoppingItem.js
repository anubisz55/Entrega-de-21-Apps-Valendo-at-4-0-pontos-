import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/styles'; 

export default function ShoppingItem({ item, onEdit, onDelete }) {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{item.name} ({item.quantity})</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={onEdit}>
          <Icon name="edit" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
