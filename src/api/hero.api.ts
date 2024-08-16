import { baseApi } from "./api";

export const getBanner = async () => {
  try {
    const res = await fetch(`${baseApi}/banner`);
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching banner:", error);
  }
};

export const getNotice = async () => {
  try {
    const res = await fetch(`${baseApi}/notice`, {
      next: { revalidate: 10 },
      cache: "no-cache",
    });
    const data = await res.json();

    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching notice:", error);
  }
};
