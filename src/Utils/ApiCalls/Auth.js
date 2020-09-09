import { get, post, put } from "./API";

export function login(data) {
  return post("/api/user/login/", data);
}