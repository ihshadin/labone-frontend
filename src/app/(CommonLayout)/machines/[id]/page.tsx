import React from 'react';
import Breadcamp from "@/utils/Breadcamp";
import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";

const MachineDetailsPage = ({ id }: { id: string }) => {
    const machine = {
        photo: "https://labonehospital.com/admin/machineimage/IMG_0778.jpg",
        name: "Machine 4",
        country: "China",
        details: "An advanced machine for electronic assembly."
      };
    return (
        <>
         <Breadcamp title="Machine Details" />
            <div className="mx-auto max-w-[1250px] px-2 py-5 md:py-20 lg:py-28">
        {/* Design -1 */}
        <div className="grid md:grid-cols-10 gap-14 my-5">
          <div className="md:col-span-4">
            <Image
              removeWrapper
              className="w-full object-cover"
              src={machine.photo}
              alt="Services image"
            />
          </div>
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-bold mt-1 mb-2">
              {machine.name}
            </h2>
            <ul className="mt-1 md:mt-2 mb-8 space-y-2 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1">
              <li>
                <div className='inline-block text-white uppercase font-medium bg-primary px-2 rounded-full'>
                <span className="font-bold ">Country: </span>
                <span>{machine.country}</span>
                </div>
                
              </li>
              <li>
                <span className="font-bold">Details: </span>
                <span>{machine.details}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
        </>
    );
};

export default MachineDetailsPage;