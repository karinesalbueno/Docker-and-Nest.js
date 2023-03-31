import API from "./API";

export function createAuth(data: { usercode: string; password: string }) {
  return API.post("auth/login", data);
}

export function createUser(data: {
  code: string;
  name: string;
  email: string;
  password: string;
}) {
  return API.post("users/register", data);
}

export function deleteUser(id: string) {
  return API.delete(`users/${id}`);
}

export function createCheck(data: { usercode: string }) {
  return API.post("work/", data);
}

export function getChecks(id: string) {
  return API.get(`/work/${id}`);
}

export function updateCheck(data: { usercode: string; date: string }) {
  return API.put(`work/`, data);
}
