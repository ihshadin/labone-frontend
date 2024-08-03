import React from "react";
import Breadcamp from "@/utils/Breadcamp";
import { Image } from "@nextui-org/react";
import { baseApi } from "@/api/api";

const getMachineData = async (id: string) => {
  try {
    const res = await fetch(`${baseApi}/machine/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    throw error;
  }
};

const MachineDetailsPage = async ({ params }: { params: { id: string } }) => {
  const machine = await getMachineData(params?.id);
  return (
    <>
      <Breadcamp title="Machine Details" subTitle={machine?.data?.name} />
      <div className="mx-auto max-w-[1250px] px-2 py-5 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-10 gap-8 md:gap-14 my-5">
          <div className="md:col-span-4">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={machine?.data?.photo}
              alt="Services image"
            />
          </div>
          <div className="md:col-span-6">
            <h2 className="text-xl md:text-3xl font-bold mt-1 mb-1 md:mb-2">
              {machine?.data?.name}
            </h2>
            <ul className="mt-1 md:mt-2 mb-8 space-y-2 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:flex-wrap *:gap-1">
              <li>
                <div className="inline-block text-sm text-primary font-medium rounded-full">
                  <span>Origin: </span>
                  <span>{machine?.data?.country}</span>
                </div>
              </li>
              <li>
                <span className="block font-semibold w-full mt-3">
                  Details:{" "}
                </span>
                <span>{machine?.data?.details}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MachineDetailsPage;
