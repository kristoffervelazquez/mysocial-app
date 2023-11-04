import API from "../config/api";


export async function uploadImage(token: string, file: string) {
  const res = await API.post(
    "media/upload",
    { file },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}

export async function deleteImage(token: string, id: string) {
  const res = await API.delete(`media/delete`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      imageId: id,
    },
  });

  return { ...res.data, status: res.status };
}

export async function editAvatar(token: string, file: string) {
  const res = await API.put(
    "media/avatar",
    { file },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}

export async function editBanner(token: string, file: string) {
  const res = await API.put(
    "media/banner",
    { file },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}

