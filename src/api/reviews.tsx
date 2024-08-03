import { baseApi } from "./api";

// Reviews
export const getTestimonials = async (limit?: number) => {
  try {
    const res = await fetch(
      `${baseApi}/reviews${limit ? `?limit=${limit}` : ""}`
    );
    const data = await res.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
};
