import { LoginResponse } from "../../shared/interfaces/auth";

export interface AuthStore {
  loggedUser: LoginResponse | null;
  setLoggedUser: (user: LoginResponse) => void;
  unsetUser: () => void;
}
