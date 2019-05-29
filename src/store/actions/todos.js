export const addTodo = text => ({
  payload: { text },
  type: 'ADD_TODO',
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  payload: { id },
});