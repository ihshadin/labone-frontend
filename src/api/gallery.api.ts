import { baseApi } from "./api";

export const getGalleryData = async () => {
  try {
    const res = await fetch(`${baseApi}/gallery/`);
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching about us:", error);
  }
};
