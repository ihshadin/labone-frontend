import { TDoctor } from "@/types/doctors.type";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const DoctorCard = ({ doctor, link }: { doctor: TDoctor; link?: string }) => {
  return (
    <>
      <Card className="w-full max-w-[400px] group">
        {/* <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full font-tiroBangla">
            {doctor?.specialization || preImage.src}
          </span>
        </CardHeader> */}
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover rounded-none"
          src={doctor?.image}
        />
        {/* <CardFooter className="absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow bg-white/70 border-t-1 border-zinc-100/50 z-10 backdrop-blur-sm"> */}
        <CardFooter className="bg-white pb-8 pt-5 group-hover:-translate-y-3 transition-all">
          <div className="w-full">
            <Link
              href={`/${link ? link : "doctors"}/${doctor?._id}`}
              className="block text-primary hover:text-primary/90 text-base md:text-2xl line-clamp-1 font-bold text-center font-tiroBangla"
            >
              {doctor?.firstName + " " + doctor?.lastName}
            </Link>
            <p className="text-accent text-base font-medium text-center line-clamp-2 font-tiroBangla">
              {doctor?.specialization}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default DoctorCard;
