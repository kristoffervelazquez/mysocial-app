import API from "../config/api";

interface IUploadImage {
  token: string;
  file: string;
}

interface IDeleteImage {
  token: string;
  id: string;
}

export async function uploadImage({ token, file }: IUploadImage) {
  const res = await API.post(
    "media/upload",
    { file: `data:image/jpeg;base64,${file}` },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}

export async function deleteImage({ token, id }: IDeleteImage) {
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

export async function editAvatar({ token, file }: IUploadImage) {
  const res = await API.put(
    "media/avatar",
    { file: `data:image/jpeg;base64,${file}` },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}

export async function editBanner({ token, file }: IUploadImage) {
  const res = await API.put(
    "media/banner",
    { file: `data:image/jpeg;base64,${file}` },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return { ...res.data, status: res.status };
}
