import axios from "axios";

import { User } from "./types";

// For Vercel deployment, use the same domain
const getApiUrl = () => {
  if (typeof window !== "undefined") {
    // Client-side: use relative URL or full domain
    return window.location.origin;
  }
  // Server-side: use environment variable or default
  return process.env.GATSBY_API_URL || "http://localhost:8000";
};

const client = axios.create({
  baseURL: getApiUrl(),
});

client.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    throw error;
  }
);

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await client.get<User[]>("/api/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    throw error;
  }
};
