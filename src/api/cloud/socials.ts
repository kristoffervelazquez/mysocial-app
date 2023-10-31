import { Social } from "../../shared/interfaces";
import API from "../config/api";

async function getSocials(username: string): Promise<Social[]> {
  const res = await API.get(`social/${username}`, {});
  return res.data;
}

export { getSocials };
