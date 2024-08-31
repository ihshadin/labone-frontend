import { baseApi } from "./api";

const today = new Date().toLocaleDateString("en-us", { weekday: "long" });

export const getSchedules = async (scheduleDay: string) => {
  try {
    const res = await fetch(
      `${baseApi}/schedule?limit=0&${
        scheduleDay ? `scheduleDay=${scheduleDay}` : `scheduleDay=${today}`
      }`
    );
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching Schedule data:", error);
  }
};
