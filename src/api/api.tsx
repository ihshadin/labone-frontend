export const baseApi = "http://localhost:5000/api/v1";

// Reviews
export const getTestimonials = async (limit?: number) => {
  try {
    const response = await fetch(`${baseApi}/reviews`);
    const data = await response.json();
    return data?.data?.result;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
  }
};
