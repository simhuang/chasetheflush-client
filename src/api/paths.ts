export const BASE_PATH = "http://localhost:8000/v1";
export const GET_DISCUSSIONS = "/discussions";

export const getpaginatedDisucssionsPath = (limit = 0, offset = 0) => {
  return `${BASE_PATH}${GET_DISCUSSIONS}?limit=${limit}&offset=${offset}`;
};
