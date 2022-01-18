import axiosClient from "./axiosClient";

const productApi = {
  getPage: (type, params) => {
    const url = `/${type}`;
    return axiosClient.get(url, { params });
  },

  getItem: (type, params) => {
    const url = `/${type}`;
    return axiosClient.get(url, { params });
  },

}

export default productApi;