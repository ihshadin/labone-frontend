"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Image from "next/image";
import LabBtn from "@/utils/LabBtn";
import { Input, Textarea } from "@nextui-org/react";
import { Rating } from "@smastrom/react-rating";

const TestimonialForm = () => {
  const [rating, setRating] = useState(0);
  const [exp, setExp] = useState("");
  const [details, setDetails] = useState("");
  const { register, handleSubmit, reset } = useForm();
  const [labOneUser, setLabOneUser] = useState(null);

  // check user is here or not
  const FeedBackData = {
    image: "https://labonehospital.com/img/bg/illlustration.jpg",
    name: "LaboneUser",
    userName: "LaboneUser001",
  };

  const onSubmit = (data: any) => {
    const feedbackDetails = {
      ...data,
      rating,
      image: FeedBackData?.image,
      userName: FeedBackData?.name,
      username: FeedBackData?.userName,
    };
    reset();
  };

  return (
    <>
      {FeedBackData && (
        <>
          <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-10">
            <div className="md:flex gap-10 items-start relative my-5 md:my-8">
              <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                <div className="w-full mt-1">
                  <label
                    htmlFor="thumbExp"
                    className="font-medium p-2"
                  ></label>
                  <Input
                    type="text"
                    onKeyUp={(e: any) => setExp(e.target.value)}
                    id="thumbExp"
                    label="Name"
                    required
                    placeholder="Type your name"
                    {...register("thumbExpression", { required: true })}
                    labelPlacement="outside"
                    classNames={{
                      label:
                        "group-data-[filled-within=true]:-translate-y-[calc(100%+_theme(fontSize.small)/2+_15px)]",
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
                </div>
                <div className="w-full mb-3">
                  <label
                    htmlFor="details"
                    className="text-sm font-semibold px-1 py-1"
                  ></label>
                  <Textarea
                    onKeyUp={(e: any) => setDetails(e.target.value)}
                    id="details"
                    type="text"
                    label="Give your full expression"
                    placeholder="Write details about your experience"
                    {...register("details", { required: true })}
                    labelPlacement="outside"
                    classNames={{
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
                </div>

                <div className="w-full mb-5">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload your photo
                  </label>
                  <Input
                    id="photo"
                    type="file"
                    placeholder="Upload your photo"
                    {...register("photo", { required: true })}
                    labelPlacement="outside"
                    classNames={{
                      inputWrapper: [
                        "flex",
                        "items-center",
                        "justify-center",
                        "bg-white",
                        "border",
                        "border-gray-300",
                        "rounded-md",
                        "py-1.5",
                        "px-4",
                        "text-sm",
                        "hover:border-primary/50",
                        "group-data-[hover=true]:bg-white",
                        "group-data-[focus=true]:bg-white",
                        "group-data-[focus=true]:border-primary/50",
                      ].join(" "),
                    }}
                  />
                </div>
                <div className="flex items-center gap-5 mb-8 md:mb-10">
                  <span className="text-lg font-semibold px-1">Rate Us.</span>
                  <div className="flex">
                    <Rating
                      onChange={(value) => setRating(value)}
                      value={rating}
                      // emptySymbol={
                      //   <FaRegStar className="text-3xl mr-2 text-amber-500" />
                      // }
                      // fullSymbol={
                      //   <FaStar className="text-3xl mr-2 text-amber-500" />
                      // }
                    />
                  </div>
                </div>
                <div className="text-center w-full">
                  <button className="lab-one-btn text-white">Submit</button>
                </div>
              </form>
              <div className="md:w-1/2 min-h-[22rem] flex flex-col justify-between relative px-5 md:px-10 py-10 mt-10 md:mt-6 rounded-2xl text-primary border  hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-5">
                    {exp === "" ? "Your Name" : exp}
                  </h2>
                  <p className="min-h-16 text-slate-500">
                    {details === "" ? "Write your experience here..." : details}
                  </p>
                </div>
                <div className="">
                  <div className="flex flex-col-reverse md:flex-row mt-8 md:items-center justify-between mb-3">
                    {/* <h3 className="text-md w-1/2 md:text-xl font-semibold mt-5 md:mt-0">
                      ~ {FeedBackData?.name || "Your Name"}
                    </h3> */}
                    <Rating
                      // initialRating={rating}
                      readOnly
                      value={rating}
                      className="flex items-center justify-center"
                      // emptySymbol={
                      //   <FaRegStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                      // }
                      // fullSymbol={
                      //   <FaStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                      // }
                    />
                  </div>
                  <div className="relative">
                    <div className="rounded-full border border-[#0fcda156] p-1 bg-secondary-color absolute">
                      <Image
                        height={80}
                        width={80}
                        src={FeedBackData?.image}
                        className="rounded-full h-[76px] w-[76px] object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TestimonialForm;
