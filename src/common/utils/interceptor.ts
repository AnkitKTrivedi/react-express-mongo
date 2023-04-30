import { useEffect, useMemo } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getCookie } from "./cookies";
const axiosInstance = axios.create({ withCredentials: true });

export const useAxiosInterceptor = (): void => {
  /** interceptor for adding token in headers */
  const interceptor = useMemo(
    () => ({
      request: (config: AxiosRequestConfig): AxiosRequestConfig => {
        const token = getCookie("token");
        if (token && config.headers) config.headers["token"] = token;
        return config;
      },
      response: (response: AxiosResponse): AxiosResponse => response,
      error: (error: AxiosError): Promise<never> => Promise.reject(error.response),
    }),
    [],
  );

  useEffect(() => {
    axiosInstance.interceptors.request.use(interceptor.request);
    axiosInstance.interceptors.response.use(interceptor.response);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(axiosInstance)]);
};

export default axiosInstance;
