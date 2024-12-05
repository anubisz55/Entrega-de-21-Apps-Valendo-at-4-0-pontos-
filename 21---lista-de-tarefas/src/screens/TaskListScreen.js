import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInput';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { loadTasks, saveTasks } from '../storage/taskStorage';
import { styles } from '../styles/styles'; 

export default function TaskListScreen() {
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [isAddingTask, setIsAddingTask] = useState(false); 

  useEffect(() => {
    loadTasks().then(setTaskList);
  }, []);

  const handleSaveTask = () => {
    if (newTask.trim()) {
      let updatedTasks;
      if (editingTaskIndex !== null) {
        updatedTasks = [...taskList];
        updatedTasks[editingTaskIndex] = newTask;
        setEditingTaskIndex(null);
      } else {
        updatedTasks = [...taskList, newTask];
      }
      setTaskList(updatedTasks);
      saveTasks(updatedTasks);
      setNewTask('');
      setIsAddingTask(false);
    }
  };

  const handleEditTask = (index) => {
    setNewTask(taskList[index]);
    setEditingTaskIndex(index);
    setIsAddingTask(true);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = taskList.filter((_, i) => i !== index);
    setTaskList(updatedTasks);
    saveTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={taskList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskItem 
            task={item} 
            onEdit={() => handleEditTask(index)} 
            onDelete={() => handleDeleteTask(index)} 
          />
        )}
      />

      {isAddingTask && (
        <View style={styles.inputOverlay}>
          <TaskInput 
            newTask={newTask} 
            setNewTask={setNewTask} 
            onSave={handleSaveTask} 
            onCancel={() => {
              setNewTask('');
              setIsAddingTask(false); 
            }}
          />
        </View>
      )}

      {!isAddingTask && (
        <TouchableOpacity style={styles.floatingButton} onPress={() => setIsAddingTask(true)}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
}
