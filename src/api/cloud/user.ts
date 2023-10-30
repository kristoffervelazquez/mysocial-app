import { User } from "../../shared/interfaces";
import API from "../config/api";

const getUserData = async (userId: string): Promise<User> => {
  const response = await API.get(`/user/${userId}`);
  return response.data;
};

export { getUserData };
