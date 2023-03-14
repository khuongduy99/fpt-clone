import axios from "axios";
import {
  getAccessTokenToLocalStorage,
  saveAccessTokenToLocalStorage,
} from "./auth";
const axiosHttp = axios.create({
  baseURL: "https://mobile-api-9aye.onrender.com/api/",
  timeout: 1000,
  headers: {
    Accept: "application/json",
  },
});

// Add a request interceptor
axiosHttp.interceptors.request.use(
  function (config) {
    config.headers.x_authorization = getAccessTokenToLocalStorage();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosHttp.interceptors.response.use(
  function (response) {
    const { url } = response.config;
    if (url == "/login" || url == "/register") {
      const token = response.data.accessToken;
      saveAccessTokenToLocalStorage(token);
    }
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosHttp;
