import axios from "axios";

const API = axios.create({
  baseURL: "https://docu-sense-ai-2.onrender.com/api",
});

export default API;