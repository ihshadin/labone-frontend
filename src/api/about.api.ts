import { baseApi } from "./api";

export const getAboutsData = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/about-us/${id}`, { cache: "no-cache" });
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching about us:", error);
  }
};
