import api from "../services/api";

const useApi = () => {
  const fetchData = async (url: string, config?: {}) => {
    let data = null;
    try {
      const response = await api.get(url, {
        ...config,
      });

      data = response.data;
    } catch (err: any) {
      throw new Error(err);
    }
    return { data };
  };

  return { fetchData };
};

export default useApi;
