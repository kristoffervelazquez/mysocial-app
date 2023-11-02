import { Social } from "../../shared/interfaces";
import API from "../config/api";

interface socialParams {
  id: string;
  token: string;
}

interface socialData {
  token: string, 
  id: string, 
  type: string, 
  url: string, 
  description: string
}
async function getSocials(username: string): Promise<Social[]> {
  const res = await API.get(`social/${username}`, {});
  return res.data;
}


async function addNewSocial (data: {token: string, type: string, url: string, description: string}) {
  const res = await API.post(`social`, {
    type: data.type,
    url: data.url,
    description: data.description
  }, {
    headers: {
      'Authorization': `Bearer ${data.token}`
    }
  });
  return res.data;
}

async function editSocial( data: socialData ) {
  const res = await API.put(`social/${data.id}`, {
    type: data.type,
    url: data.url,
    description: data.description
  }, {
    headers: {
      'Authorization': `Bearer ${data.token}`
    }
  });
  return res.data;
}

async function deleteSocial({id, token}: socialParams): Promise<void> {
  await API.delete(`social/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
}

export { getSocials, deleteSocial, addNewSocial, editSocial };
