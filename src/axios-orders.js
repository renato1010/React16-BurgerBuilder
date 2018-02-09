import axios from 'axios';

const axiosOrderInstance = axios.create({
  baseURL: 'https://burguer-builder-backend.firebaseio.com'
});

export default axiosOrderInstance;
