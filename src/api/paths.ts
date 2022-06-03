export const BASE_PATH = "http://localhost:8000/v1";
export const DISCUSSIONS = "/discussions";
export const POST = "/posts";

export const getpaginatedDisucssionsPath = (limit = 0, offset = 0) => {
  return `${BASE_PATH}${DISCUSSIONS}?limit=${limit}&offset=${offset}`;
};

export const getPost = (id: number) => {
  return `${BASE_PATH}${DISCUSSIONS}/${id}`;
}