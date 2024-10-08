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

export const getMachine = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/machine/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};
