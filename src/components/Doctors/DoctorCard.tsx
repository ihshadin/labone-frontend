import { TDoctor } from "@/types/doctors.type";
import { TMachine } from "@/types/machine.type";
import { Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
// import Link from "next/link";

const DoctorCard = ({ doctor }: { doctor: TDoctor }) => {
  return (
    <>
      <Card className="w-full max-w-[380px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[12px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full font-tiroBangla">
            {doctor.degree}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src={doctor?.image}
        />
        <CardFooter className="absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow bg-white/70 border-t-1 border-zinc-100/50 z-10 backdrop-blur-sm">
          <div className="w-full">
            <Link
              href={`/doctors/${doctor?._id}`}
              className="block text-primary hover:text-primary/90 text-base md:text-lg font-bold text-center font-tiroBangla"
            >
              {doctor.firstName + " " + doctor.lastName}
            </Link>
            <p className="text-accent text-xs font-medium text-center line-clamp-2 font-tiroBangla">
              {doctor.degree}
            </p>
          </div>
        </CardFooter>
      </Card>
      {/* <Card radius="lg" className="border-none w-full h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full">
            Japan
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="flex-col justify-start items-start bg-white/70 backdrop-blur-sm absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow z-10">
          <Link href={"/"} className="text-black text-lg md:text-xl font-bold">
            CT SCAN Machine
          </Link>
          <p className="text-accent text-xs font-medium line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, sed
            quibusdam. Quaerat deserunt nam minus. Quaerat deserunt nam minus.
          </p>
        </CardFooter>
      </Card> */}
      {/* <Card radius="lg" className="border-none w-full">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-[300px] object-cover"
          src="https://labonehospital.com/admin/machineimage/machine1.jpg"
        />
        <CardFooter className="flex-col justify-start items-start bg-white h-auto rounded-large shadow z-10">
          <Link href={"/"} className="text-primary text-xl font-bold">
            CT SCAN Machine
          </Link>
          <p className="text-accent/90 text-sm">Japan</p>
        </CardFooter>
      </Card> */}
    </>
  );
};

export default DoctorCard;
