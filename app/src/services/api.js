import axios from "axios";

const API = "https://jsonplaceholder.typicode.com/users";

export const getUsers = async () => {
  try {
    const response = await axios.get(API);
    const users = response.data;
    return users;
  } catch (error) {
    console.log("Error while calling getUsers API", error);
  }
};


export const addUser = async (data) => {
  try {
    const response = await axios.post(API, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling addUser API", error);
  }
};

export const editUser = async (id, data) => {
  try {
    const response = await axios.put(`${API}/${id}`, data);
    return response.data;
  } catch (error) {
    console.log("Error while calling updateUser API", error);
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${API}/${id}`);  
    return response.data;
  } catch (error) {
    console.log("Error while calling deleteUser API", error);
  }
};
