import axios, { AxiosInstance, AxiosResponse, isAxiosError } from "axios";
import { LOCALSTORAGE_AUTH_TOKEN, TYPICODE_URL } from "@/shared/lib/constants";

export const instance: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: TYPICODE_URL,
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${window.localStorage.getItem(
    LOCALSTORAGE_AUTH_TOKEN,
  )}`;
  return config;
});

instance.interceptors.response.use(
  (config: AxiosResponse<any, any>) => config,
  async (error) => {
    const originalRequest = { ...error.config };
    originalRequest._isRetry = true;

    if (
      error.response.status === 401 &&
      error.config &&
      !originalRequest._isRetry
    ) {
      try {
        const res = await instance.get("/refresh");

        window.localStorage.setItem(
          LOCALSTORAGE_AUTH_TOKEN,
          res.data.accessToken,
        );

        return instance.request(originalRequest);
      } catch (e) {
        if (isAxiosError(e)) console.log(e.message);
      }
    }

    throw error;
  },
);
