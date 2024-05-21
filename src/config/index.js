import axios from "axios";

export const axiosUrl = axios.create({ baseURL: "https://dummyjson.com" });

export const loginUrl = axios.create({ baseURL: "https://dummyjson.com/auth/login" });

// username: 'kminchelle',
// password: '0lelplR',