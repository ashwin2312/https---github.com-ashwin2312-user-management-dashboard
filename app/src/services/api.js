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


