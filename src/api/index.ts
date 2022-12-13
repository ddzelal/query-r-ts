import axios from 'axios';

export const getTodos = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};
