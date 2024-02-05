import axios from "axios";

const endpoint = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL,

});

const getUsers = () => endpoint.get('/users');
const createUser = (payload) => endpoint.post('/users', payload);
const deleteUser = (payload) => endpoint.delete(`/users/${payload}`)

const api = {
    getUsers,
    deleteUser,
    createUser
}

export default api;

