import API from "../config/api";

interface Website {
  _id: string;
  name: string;
  description: string;
  url: string;
}
async function getWebsites(token: string): Promise<Website[]> {
  const res = await API.get("/website/all", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

export { getWebsites };
