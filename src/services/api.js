import axios from 'axios';

const API_URL = 'http://localhost:5000/api';  // URL de base de ton API

export const getFighters = async () => {
  try {
    const response = await axios.get(`${API_URL}/fighters`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the fighters !", error);
  }
};