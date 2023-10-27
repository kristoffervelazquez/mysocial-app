import URL from "url-parse";
const link = "https://my-social-v1.netlify.app/kingg?id=123&name=kristoffer&age=20";
export const getUserAndParamsFromUrl = (url: string = link) => {
  const urlObj = URL(url);

  const domain = urlObj.origin;

  const username = urlObj.pathname.slice(1);

  const query: object = Object.fromEntries(urlObj.query.slice(1).split("&").map((item) => item.split("=")));

  return { username, query, domain };
};
