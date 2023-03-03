import axios from 'axios';

const baseDomain = process.env.STRAPI_URL; // Change your API here

export const customHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const baseUrl = `${baseDomain}/api`;

export default axios.create({
  baseUrl,
  headers: customHeaders,
});

export const serializeQuery = (query) => {
  return Object.keys(query)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
    )
    .join("&");
};
