import axios, { AxiosResponse } from 'axios';

interface RequestParams {
  [key: string]: string | number | boolean | null | undefined; 
}

interface RequestData<T = Record<string, unknown>> {
  [key: string]: T; 
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 

const getToken = (): string | null => {
  try {
    const token = localStorage.getItem('TOKEN');
    return token ? token : null;
  } catch (error) {
    console.error('Failed to retrieve token from local storage:', error);
    return null; 
  }
};

export const getAsync = async <T>(url: string, params?: RequestParams): Promise<AxiosResponse<T>> => {
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  try {
    const response = await axios.get<T>(`${baseUrl}${url}`, { headers, params });
    return response;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const postAsync = async <T>(url: string, data: RequestData<T>): Promise<AxiosResponse<T>> => {
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await axios.post<T>(`${baseUrl}${url}`, data, { headers });
    return response;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const putAsync = async <T>(url: string, data?: RequestData<T>): Promise<AxiosResponse<T>> => {
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await axios.put<T>(`${baseUrl}${url}`, data, { headers });
    return response;
  } catch (error) {
    return handleAxiosError(error);
  }
};

export const deleteAsync = async <T>(url: string): Promise<AxiosResponse<T>> => {
  const token = getToken();
  const headers = token ? { Authorization: `Bearer ${token}` } : {};

  try {
    const response = await axios.delete<T>(`${baseUrl}${url}`, { headers });
    return response;
  } catch (error) {
    return handleAxiosError(error);
  }
};


const handleAxiosError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    console.error('Axios error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'An error occurred');
  } else {
    console.error('Unexpected error:', error);
    throw new Error('An unexpected error occurred');
  }
};
