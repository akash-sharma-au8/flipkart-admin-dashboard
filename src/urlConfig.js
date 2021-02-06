const baseURL = process.env.API || "https://flipkart-admin-dashboard.herokuapp.com";

export const api = `${baseURL}/api`;
export const generatePublicUrl = (fileName) => {
  return `${baseURL}/public/${fileName}`;
};
