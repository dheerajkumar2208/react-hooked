// api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3004/hello/', // Replace with your API base URL
  headers: {
    'Content-Type': "application/json",
    'Accept': "application/json",
    
  },
});

export default api;



  // https://cors-anywhere.herokuapp.com/https://your-deployed-server.com/api/endpoint


