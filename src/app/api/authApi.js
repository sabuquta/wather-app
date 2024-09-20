import axios from 'axios';

//Login by email and password
export const login = async (email, password ) => {
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, { email, password });
  return response.data; 
};
