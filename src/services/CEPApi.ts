import axios from "axios";

export const CepAPI = axios.create({
  baseURL: "cep.la",
});

axios.defaults.headers.common["Accept"] = `application/json`;
