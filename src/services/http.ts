import axios, { AxiosRequestConfig } from "axios";

export default class Http {
  async get(url: string, config?: AxiosRequestConfig) {
    return await axios.get(url, config);
  }

  async post(url: string, data: any, config?: AxiosRequestConfig) {
    return await axios.post(url, data, config);
  }

  async put(url: string, data: any, config?: AxiosRequestConfig) {
    return await axios.put;
  }

  async delete(url: string, config?: AxiosRequestConfig) {
    return await axios.delete(url, config);
  }
}
