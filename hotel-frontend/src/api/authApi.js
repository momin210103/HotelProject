import axiosClient from "./axiosClient";

const authApi = {
  login: (credentials) => axiosClient.post("/auth/login", credentials),
  register: (payload) => axiosClient.post("/auth/register", payload),
};

export default authApi;
