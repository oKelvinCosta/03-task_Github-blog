import axios from "axios";

export const apiAxios = axios.create({
  baseURL: "https://api.github.com",
});
