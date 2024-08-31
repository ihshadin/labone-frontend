import { baseApi } from "./api";

export const getDgMachines = async (params: any[]) => {
  try {
    const queryParams = params
      .map((param) => `${param.name}=${param.value}`)
      .join("&");

    const res = await fetch(
      `${baseApi}/diagnostic-machine${queryParams ? `?${queryParams}` : ""}`
    );
    const data = await res.json();

    return data?.data;
  } catch (error) {
    console.error("Error fetching Diagnostic Machine:", error);
  }
};

export const getDgMachine = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/diagnostic-machine/${id}`);
    return res.json();
  } catch (error) {
    console.error("Error fetching Diagnostic Machine:", error);
  }
};
