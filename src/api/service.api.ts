import { baseApi } from "./api";

export const getService = async () => {
  try {
    const res = await fetch(`${baseApi}/service`, { cache: "no-cache" });
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching service:", error);
  }
};
