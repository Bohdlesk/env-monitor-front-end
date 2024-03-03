import axios from 'axios';

export const EnvMonitorApi = axios.create({ baseURL: 'https://tg-bot-api-node.herokuapp.com/v1' });