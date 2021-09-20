import axios, { AxiosRequestConfig } from "axios";
import SessionStorage from "./sessionStorage";

export default class Http {
  private static getSecureConfig(config?: AxiosRequestConfig) {
    const token = SessionStorage.getToken();
    return {
      ...config,
      headers: { authorization: `Bearer ${token}` },
    };
  }
  static async get(
    url: string,
    secure: boolean = false,
    config?: AxiosRequestConfig
  ) {
    if (secure) {
      return (await axios.get(url, Http.getSecureConfig(config))).data;
    }
    return (await axios.get(url, config)).data;
  }

  static async post(
    url: string,
    data: any,
    secure: boolean = false,
    config?: AxiosRequestConfig
  ) {
    if (secure) {
      return (await axios.post(url, data, Http.getSecureConfig(config))).data;
    }

    return (await axios.post(url, data, config)).data;
  }

  static async put(
    url: string,
    data: any,
    secure: boolean = false,
    config?: AxiosRequestConfig
  ) {
    if (secure) {
      return (await axios.put(url, data, Http.getSecureConfig(config))).data;
    }
    return (await axios.put(url, data, config)).data;
  }

  static async delete(
    url: string,
    secure: boolean = false,
    config?: AxiosRequestConfig
  ) {
    if (secure) {
      return (await axios.post(url, Http.getSecureConfig(config))).data;
    }
    return (await axios.delete(url, config)).data;
  }
}
