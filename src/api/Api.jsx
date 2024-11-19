import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  function (config) {
    const date = new Date();
    if (config.method === "post") {
      config.data = {
      ...config.data,
      id:crypto.randomUUID(),
      createAt:date,
    }
  }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    console.log(response);
    const newArr = response.data.map((item)=>{
      return {
        ...item,
        title: item.title.toUpperCase()
      }
    })
    response.data = newArr;
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
