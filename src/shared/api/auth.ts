import { instance } from "./axios-interceptors";

export class AuthService {
  static login({
    username,
    password,
  }: {
    username: string;
    password: string | number;
  }) {
    return instance.post("/login", { username, password });
  }

  static refreshToken() {
    return instance.get("/refresh");
  }

  static logout() {
    return instance.get("/logout");
  }
}
