import { baseApi } from "./api";

export const addAppointment = async () => {
  try {
    const res = await fetch(`${baseApi}/appointment`, {});
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};
