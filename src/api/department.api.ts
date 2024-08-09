import { baseApi } from "./api";

export const getDepartment = async () => {
  try {
    const res = await fetch(`${baseApi}/department`);
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
