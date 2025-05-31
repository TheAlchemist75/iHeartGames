import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "04630d7cbd4a4913bc8bb148b6a061f4",
  },
});

export default apiClient;
