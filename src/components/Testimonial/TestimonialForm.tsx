"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import Image from "next/image";
import LabBtn from "@/utils/LabBtn";
import { Input, Textarea } from "@nextui-org/react";


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
        {/* Hello */}
          <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-10">
            <div className="md:flex gap-10 items-start relative my-5 md:my-16">
              <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                <div className="w-full my-5">
                  <label htmlFor="thumbExp" className="font-medium p-1 py-2">
                  </label>
                  <Input
                    type="text"
                    onKeyUp={(e: any) => setExp(e.target.value)}
                    id="thumbExp"
                    label="Thumb expression"
                    required
                    placeholder="Awesome experience"
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
                  {/* <input
                    onKeyUp={(e: any) => setExp(e.target.value)}
                    type="text"
                    id="thumbExp"
                    className="w-full px-6 bg-secondary-color py-3 rounded-xl border-2 border-slate-500 hover:border-[#0fcda156] focus:border-[#0fcda156] outline-none"
                    placeholder="Awesome experience"
                    {...register("thumbExpression", { required: true })}
                  /> */}
                </div>
                <div className="w-full mb-5">
                  <label
                    htmlFor="details"
                    className="text-sm font-semibold px-1 py-1"
                  ></label>
                  <Input
                    id="details"
                    type="file"
                    label="Give your full expression"
                    placeholder="Write details about your experience"
                    {...register("details", { required: true })}
                    labelPlacement="outside"
                    classNames={{
                      inputWrapper: [
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
                    htmlFor="details"
                    className="text-sm font-semibold px-1 py-1"
                  ></label>
                  {/* <textarea
                  onKeyUp={(e:any) => setDetails(e.target.value)}
                  rows={5}
                  id="details"
                  className="w-full px-6 bg-secondary-color py-3 rounded-xl border-2 border-slate-500 hover:border-[#0fcda156] focus:border-[#0fcda156] outline-none"
                  placeholder="Write details about your experience"
                  {...register("details", { required: true })}
                /> */}
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
                <div className="flex items-center gap-5 mb-8 md:mb-12">
                  <span className="text-xl font-semibold px-1">Rate Us.</span>
                  <div className="flex">
                    <Rating
                      onClick={(value) => setRating(value)}
                      emptySymbol={
                        <FaRegStar className="text-3xl mr-2 text-amber-500" />
                      }
                      fullSymbol={
                        <FaStar className="text-3xl mr-2 text-amber-500" />
                      }
                    />
                  </div>
                </div>
                <div className="text-center w-full">
                  <LabBtn type="submit" text="submit"></LabBtn>
                </div>
              </form>
              <div className="md:w-1/2 min-h-[22rem] flex flex-col justify-between relative px-5 md:px-10 py-10 mt-10 md:mt-6 rounded-2xl text-primary border  hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white">
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-5">
                    {exp === "" ? "Your Expression" : exp}
                  </h2>
                  <p className="min-h-16 text-slate-500">
                    {details === "" ? "Write your experience here..." : details}
                  </p>
                </div>
                <div className="">
                  <div className="flex flex-col-reverse md:flex-row mt-8 md:items-center justify-between mb-3">
                    <h3 className="text-md w-1/2 md:text-xl font-semibold mt-5 md:mt-0">
                      ~ {FeedBackData?.name || "Your Name"}
                    </h3>
                    <Rating
                      initialRating={rating}
                      readonly
                      className="flex items-center justify-center"
                      emptySymbol={
                        <FaRegStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                      }
                      fullSymbol={
                        <FaStar className="text-xl md:text-2xl ml-3 text-amber-500" />
                      }
                    />
                  </div>
                  <div className="w-20 h-20 object-cover rounded-full border border-[#0fcda156] p-1 bg-secondary-color absolute">
                    <Image
                      height={250}
                      width={250}
                      src={FeedBackData?.image}
                      className="rounded-full"
                      alt=""
                    />
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
