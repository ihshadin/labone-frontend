"use client";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { Input, Textarea } from "@nextui-org/react";
import { uploadImageInCloudinary } from "@/utils/UploadImages/UploadImageInCloudinay";
import { TTestimonial } from "@/types/testimonial.type";
import { Rating, Star } from "@smastrom/react-rating";
import Image from "next/image";
import "@smastrom/react-rating/style.css";
import { baseApi } from "@/api/api";
import toast from "react-hot-toast";

const TestimonialForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm();
  const [rating, setRating] = useState(0);
  const [imgPreview, setImgPreview] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const userName = watch("name");
  const message = watch("message");

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      setFile(selectedFile);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result as string);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const onSubmit = async (data: Partial<TTestimonial>) => {
    try {
      let imageLink;
      if (file) {
        imageLink = await uploadImageInCloudinary(file);
      }
      data.rating = rating;
      data.photo = imageLink;
      const response = await fetch(`${baseApi}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        setImgPreview("");
        setRating(0);
        setFile(null);
        toast.success("Thank you for you reviews!");
      } else {
        toast.error("Failed to create reviews");
      }
    } catch (error) {
      toast.error("An error occurred while creating reviews",);
    }
  };

  return (
    <div className="mx-auto max-w-[1250px] px-2 py-10 md:py-16 lg:py-20">
      <div className="md:grid md:grid-cols-2 md:items-start gap-10 relative p-10 border rounded-2xl shadow-[3px_4px_8px] hover:shadow-[3px_4px_8px_inset] shadow-primary/20 hover:shadow-primary/20">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-3 md:gap-4"
        >
          <div>
            <Input
              type="text"
              {...register("name", { required: "Name is required" })}
              label="Write your name"
              placeholder="Write here..."
              onKeyUp={(e: any) => setValue("name", e.target.value)}
              labelPlacement="outside"
              classNames={{
                label:
                  "group-data-[filled-within=true]:-translate-y-[calc(100%+_theme(fontSize.small)/2+_13px)]",
                inputWrapper: [
                  "border",
                  "bg-white",
                  "hover:border-primary/50",
                  "group-data-[hover=true]:bg-white",
                  "group-data-[focus=true]:bg-white",
                  "group-data-[focus=true]:border-primary/50",
                ],
              }}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message as string}
              </p>
            )}
          </div>
          <div>
            <Textarea
              type="text"
              {...register("message", { required: "Message is required" })}
              label="Write your message"
              placeholder="Write here..."
              onKeyUp={(e: any) => setValue("message", e.target.value)}
              labelPlacement="outside"
              classNames={{
                label: "pb-0.5",
                inputWrapper: [
                  "border",
                  "bg-white",
                  "hover:border-primary/50",
                  "group-data-[hover=true]:bg-white",
                  "group-data-[focus=true]:bg-white",
                  "group-data-[focus=true]:border-primary/50",
                ],
              }}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message as string}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              htmlFor="photo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Upload your photo
            </label>
            <input
              onChange={handleFileChange}
              type="file"
              name="photo"
              id="photo"
            />
          </div>
          <div className="flex items-center gap-5 mt-5">
            <span className="text-xl font-semibold">Rate Us.</span>
            <div>
              <Rating
                style={{ maxWidth: 200 }}
                onChange={(value: number) => setRating(value)}
                value={rating}
                spaceBetween="small"
                radius="large"
                spaceInside="medium"
                itemStyles={{
                  itemShapes: Star,
                  boxBorderWidth: 2,
                  activeFillColor: [
                    "#da1600",
                    "#db711a",
                    "#dcb000",
                    "#61bb00",
                    "#009664",
                  ],
                  activeBoxColor: [
                    "#da160020",
                    "#db711a20",
                    "#dcb00020",
                    "#61bb0020",
                    "#00966420",
                  ],
                  activeBoxBorderColor: [
                    "#da1600",
                    "#db711a",
                    "#dcb000",
                    "#61bb00",
                    "#009664",
                  ],
                  inactiveBoxColor: "#eee",
                  inactiveFillColor: "#9CA3AF",
                  inactiveBoxBorderColor: "#ddd",
                }}
              />
              {rating === 0 && (
                <p className="text-red-500 text-sm mt-1">Rating is required</p>
              )}
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              className="lab-one-btn text-white"
              disabled={rating === 0}
            >
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div className="min-h-[350px] flex flex-col justify-between relative px-5 md:px-10 py-10 mt-10 md:mt-6 mb-10 rounded-2xl text-primary border hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/40">
          <div>
            <Rating
              style={{ maxWidth: 180 }}
              readOnly
              value={rating}
              spaceBetween="small"
              radius="large"
              spaceInside="medium"
              itemStyles={{
                itemShapes: Star,
                boxBorderWidth: 2,
                activeFillColor: [
                  "#da1600",
                  "#db711a",
                  "#dcb000",
                  "#61bb00",
                  "#009664",
                ],
                activeBoxColor: [
                  "#da160020",
                  "#db711a20",
                  "#dcb00020",
                  "#61bb0020",
                  "#00966420",
                ],
                activeBoxBorderColor: [
                  "#da1600",
                  "#db711a",
                  "#dcb000",
                  "#61bb00",
                  "#009664",
                ],
                inactiveBoxColor: "#eee",
                inactiveFillColor: "#9CA3AF",
                inactiveBoxBorderColor: "#ddd",
              }}
            />
            <p className="min-h-16 text-accent mt-3">
              {message === "" ? "Your experience will show here..." : message}
            </p>
          </div>
          <div className="">
            <div className="flex flex-col-reverse md:flex-row mt-8 md:items-center justify-between mb-3">
              <h2 className="text-lg md:text-xl font-semibold mt-5 md:mt-0">
                {userName ? userName : "Your Name"}
              </h2>
            </div>
            <div className="relative">
              <div className="rounded-full border border-[#0fcda156] p-1 bg-white absolute">
                {imgPreview ? (
                  <Image
                    height={80}
                    width={80}
                    src={imgPreview}
                    className="rounded-full h-[76px] w-[76px] object-cover"
                    alt=""
                  />
                ) : (
                  <FaUserCircle className="text-accent h-[76px] w-[76px]" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialForm;
