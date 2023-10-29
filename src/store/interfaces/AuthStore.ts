export interface AuthStore {
  token: string;
  setToken: (token: string) => void;
  removeToken: () => void;
  user_id: string;
  setUserId: (user_id: string) => void;
}
