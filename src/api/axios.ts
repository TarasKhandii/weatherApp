/* -------------------------------- Libraries ------------------------------- */
import axios from 'axios';
/* ----------------------------------- Env ---------------------------------- */
import {APP_BASE_URL} from '@env';

const instance = axios.create({
  baseURL: APP_BASE_URL,
});

export default instance;
