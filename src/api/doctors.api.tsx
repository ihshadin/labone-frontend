import { baseApi } from "./api";

export const getDoctors = async (limit?: number) => {
  try {
    const res = await fetch(
      `${baseApi}/doctor${limit ? `?limit=${limit}` : ""}`
    );
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};

export const getNewDoctors = async (params: any[]) => {
  try {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/doctor${queryParams ? `?${queryParams}` : ""}`
    );
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error("Error fetching doctors:", error);
  }
};

export const getDoctor = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/doctor/${id}`);
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching doctor data:", error);
  }
};
