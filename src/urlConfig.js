const baseURL =
  location.hostname === "localhost"
    ? "http://localhost:2000"
    : "https://flipkart-api-server.herokuapp.com";

export const api = `${baseURL}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`;
};
