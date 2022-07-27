import axios from 'axios';

const instance = axios.create({
  
  baseURL: 'https://us-central1-mike-f6b2f.cloudfunctions.net/api  '
});

export default instance;
