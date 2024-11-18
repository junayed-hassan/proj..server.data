import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000",
})
api.interceptors.request.use(function (config) {
    // console.log(config);
    config.data = {
        ...config.data,
        _token: "3a604313-313c-4ef4-af6b-4b9763283c36",

    };
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

api.interceptors.response.use(function (response) {
// console.log('this is response');

    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export {api}