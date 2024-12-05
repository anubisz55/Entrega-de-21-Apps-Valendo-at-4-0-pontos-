import React, { useEffect, useState } from 'react';
import { View, Text, Alert, FlatList } from 'react-native';
import { getTasks, addTask, updateTask, deleteTask } from './src/services/api';
import TaskForm from './src/components/TaskForm';
import TaskList from './src/components/TaskList';
import styles from './src/styles/styles';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks = async () => {
    try {
      const data = await getTasks();
      setTasks(data); 
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  useEffect(() => {
    fetchTasks();  
  }, []);

  const handleAddTask = async (task) => {
    try {
      const newTask = await addTask(task);
      setTasks([...tasks, newTask]);  
    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  const handleUpdateTask = async (task) => {
    try {
      const updatedTask = await updateTask(task.id, task);
      setTasks(tasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)));
      setSelectedTask(null); 
    } catch (error) {
      console.error('Erro ao atualizar tarefa:', error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id)); 
    } catch (error) {
      console.error('Erro ao excluir tarefa:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Tarefas</Text>
      <TaskForm
        onSubmit={selectedTask ? handleUpdateTask : handleAddTask}
        selectedTask={selectedTask}
        onCancel={() => setSelectedTask(null)}
      />
      <TaskList
        tasks={tasks}
        onEdit={(task) => setSelectedTask(task)}
        onDelete={handleDeleteTask}
      />
    </View>
  );
}
