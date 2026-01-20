import axios from "axios";
//import stateService from './state-service';

const api = axios.create({
  baseURL: "https://kt2lp7qk-5277.euw.devtunnels.ms/api",
  //baseURL: 'https://gamestreet-api.azurewebsites.net/api',
  headers: {
    //'Authorization': `Bearer ${stateService.auth?.Token}`,
    "Content-Type": "application/json",
  },
});

export default api;
