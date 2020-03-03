import axios from "axios";
const baseUrl = "https://reqres.in/api/";
const localBaseUrl = "http://localhost:5000/api/";
export const userRegistration = data => {
  return axios.post(localBaseUrl + "users/", data);
};
export const userLogin = (email, password) => {
  return axios.post(localBaseUrl + "auth/", { email, password });
};

export const pendingList = () => {
  return axios.get(localBaseUrl + "list/pending", {
    headers: { "x-auth-token": localStorage.getItem("token") }
  });
};
export const deleteList = id => {
  return axios.delete(localBaseUrl + "list/" + id, {
    headers: { "x-auth-token": localStorage.getItem("token") }
  });
};
export const deletecompletedList = id => {
  return axios.get(localBaseUrl + "list/deleteAllList", {
    headers: { "x-auth-token": localStorage.getItem("token") }
  });
};
export const completedList = () => {
  return axios.get(localBaseUrl + "list/completed", {
    headers: { "x-auth-token": localStorage.getItem("token") }
  });
};
export const addList = data => {
  return axios.post(localBaseUrl + "list/", data, {
    headers: { "x-auth-token": localStorage.getItem("token") }
  });
};
export const updateList = (id, data) => {
  return axios.put(localBaseUrl + "list/update/" + id, data, {
    headers: {
      "x-auth-token": localStorage.getItem("token")
    }
  });
};
export const getUserInfo = () => {
  return axios.get(localBaseUrl + "user");
};
export const deleteUserInfo = id => {
  return axios.delete(localBaseUrl + "user/delete/" + id);
};
export const updateUserInfo = (id, value) => {
  return axios.post(localBaseUrl + "user/update/" + id, value);
};
