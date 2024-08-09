import { TDoctor } from "@/types/doctors.type";
import { Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
import preImage from "@/assets/images/pre-doctor.jpg";

const DoctorCard = ({ doctor }: { doctor: TDoctor }) => {
  return (
    <>
      <Card className="w-full max-w-[400px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full font-tiroBangla">
            {doctor?.specialization || preImage.src}
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
              {doctor?.firstName + " " + doctor?.lastName}
            </Link>
            <p className="text-accent text-xs font-medium text-center line-clamp-2 font-tiroBangla">
              {doctor?.degree}
            </p>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default DoctorCard;
