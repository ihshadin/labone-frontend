import { baseApi } from "./api";

export const getSchedules = async () => {
  try {
    const res = await fetch(`${baseApi}/schedule`);
    const data = await res.json();

    console.log("data:", data);

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching Schedule data:", error);
  }
};
