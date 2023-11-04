import { LoginResponse } from "../../shared/interfaces/auth";
import API from "../config/api";

interface IRegisterForm {
  name: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
}

async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<LoginResponse> {
  const response = await API.post("/auth/login", {
    email,
    password,
  });

  console.log(response.data);

  return response.data;
}

async function logout(email: string) {
  const res = await API.post("/auth/logout", {
    email,
  });

  return res.data;
}

async function register(form: IRegisterForm) {
  const res = await API.post("/auth/register", form);

  return res.data;
}

async function forgotPassword(email: string) {
  const res = await API.post("/auth/forgotPassword", {
    email,
  });

  return res.data;
}

export { login, logout, register, forgotPassword };
