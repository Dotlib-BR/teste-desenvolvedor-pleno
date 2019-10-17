import axios from 'axios';

const apis = axios.create({
	baseURL: process.env.REACT_APP_API_URL
});

// Users
export const postTodo = ( todo ) => apis.post( 'todos', todo );
export const getTodos = ( params ) => apis.get( 'todos' + params );
export const getTodoId= (id) => apis.get( `todos/${id}` );
export const putTodo = ( id, todo ) => apis.put( `todos/${id}`, todo );
export const removerTodo = ( id ) => apis.delete( 'todos/' + id );

const Api = {
	getTodos,
	postTodo,
	getTodoId,
	putTodo,
	removerTodo
}

export default Api;
