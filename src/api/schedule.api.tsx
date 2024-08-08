import { baseApi } from "./api";

export const getSchedules = async () => {
  try {
    const res = await fetch(`${baseApi}/schedule`);
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching Schedule data:", error);
  }
};
