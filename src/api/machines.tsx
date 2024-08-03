import { baseApi } from "./api";

export const getMachines = async (limit?: number) => {
  try {
    const res = await fetch(
      `${baseApi}/machine${limit ? `?limit=${limit}` : ""}`
    );
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
