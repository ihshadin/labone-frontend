import { baseApi } from "./api";

export const getDgDoctors = async (limit?: number) => {
  try {
    const res = await fetch(
      `${baseApi}/diagnostic-doctor${limit ? `?limit=${limit}` : ""}`,
      { cache: "no-cache" }
    );
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching Diagnostic doctors:", error);
  }
};
