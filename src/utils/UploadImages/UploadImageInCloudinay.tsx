const upload_preset = process.env.CLOUDINARY_UPLOAD_PRESET;
const api_key = process.env.CLOUDINARY_API_KEY;
const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;

export const uploadImageInCloudinary = async (
  file: any,
  toastId?: string | number
) => {
  // const imageFile = file[0]?.originFileObj;
  const imageData = new FormData();
  imageData.append("file", file);
  imageData.append("upload_preset", "labone_preset" as string);
  imageData.append("api_key", "855284155988226" as string);
  imageData.append("timestamp", String(Date.now() / 1000));

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dz4ckryd6/image/upload`,
      {
        method: "POST",
        body: imageData,
      }
    );
    const result = await response.json();
    // console.log("result---=>", result);

    return result?.url;
  } catch (error: any) {
    console.log(error);
  }
};
