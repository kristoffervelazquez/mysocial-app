import { User } from "../../shared/interfaces";
import API from "../config/api";

interface EditUserData {
  name?: string;
  email?: string;
  password?: string;
  newPassword?: string;
  lastName?: string;
  username?: string;
  about: string;
}

const getUserData = async (userId: string): Promise<User> => {
  const response = await API.get(`/user/${userId}`);
  return response.data;
};
async function editUserData (data: EditUserData, token: string) {
  const res = await API.put(`/user`, data, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return res.data;
}
export { getUserData, editUserData };
