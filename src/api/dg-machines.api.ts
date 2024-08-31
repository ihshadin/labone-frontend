import { baseApi } from "./api";

export const getDgMachines = async (limit?: number) => {
  try {
    const res = await fetch(
      `${baseApi}/diagnostic-machine${limit ? `?limit=${limit}` : ""}`,
      { cache: "no-cache" }
    );
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
