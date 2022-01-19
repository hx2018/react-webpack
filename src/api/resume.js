import { get, post } from "../helpers/fetch";

const API_DOMAIN = "http://localhost:3001" + "/api";

const API_GET_RESUME_LIST = "/resume/list";
const API_DELETE_RESUME = (id) => `/resume/list/${id}`;
const API_DELETE_UPDATE = "/resume/update";

export function getResumeList() {
  return get(API_DOMAIN + API_GET_RESUME_LIST);
}

export function deleteResume(id) {
  return post(API_DOMAIN + API_DELETE_RESUME(id), "DELETE");
}

export function updateStatus(data) {
  return post(API_DOMAIN + API_DELETE_UPDATE, "POST", data);
}
