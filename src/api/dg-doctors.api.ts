import { baseApi } from "./api";

export const getDgDoctors = async (params: any[]) => {
  try {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/diagnostic-doctor${queryParams ? `?${queryParams}` : ""}`
    );
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error("Error fetching Diagnostic doctors:", error);
  }
};

export const getDgDoctor = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/diagnostic-doctor/${id}`, {
      cache: "no-cache",
    });
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.error("Error fetching doctor data:", error);
  }
};
