const BASE_URL = 'https://6732586c2a1b1a4ae10fb2ea.mockapi.io/api/v1/Tasks';

export const getTasks = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Erro ao buscar tarefas');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addTask = async (task) => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Erro ao adicionar tarefa');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateTask = async (id, updatedTask) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTask),
    });
    if (!response.ok) throw new Error('Erro ao atualizar tarefa');
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Erro ao excluir tarefa');
  } catch (error) {
    console.error(error);
    throw error;
  }
};
