/* -------------------------------- Libraries ------------------------------- */
import axios from 'axios';
/* ------------------------------ Constant Data ----------------------------- */
import {baseURL} from '../constantData/baseUrl';

const instance = axios.create({
  baseURL,
});

export default instance;
