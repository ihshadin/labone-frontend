import { TMachine } from "@/types/machine.type";
import { Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";
// import Link from "next/link";

const MachineCard: React.FC<{ machine: TMachine }> = ({ machine }) => {
  return (
    <>
      {/* <Card className="w-full h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full">
            {machine.country}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src={machine.photo}
        />
        <CardFooter className="absolute bg-white/70 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between backdrop-blur-sm">
          <div>
            <Link
              href={machine.slug}
              className="text-black text-lg md:text-xl font-bold"
            >
              {machine.name}
            </Link>
            <p className="text-accent text-xs font-medium line-clamp-2">
              {machine.details}
            </p>
          </div>
        </CardFooter>
      </Card> */}
      <Card radius="lg" className="border-none w-full h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full">
            {machine.country}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={machine.photo}
        />
        <CardFooter className="flex-col justify-start items-start bg-white/70 backdrop-blur-sm absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow z-10">
          <Link
            href={machine.slug}
            className="text-black text-base md:text-lg font-bold"
          >
            {machine.name}
          </Link>
          <p className="text-accent text-xs font-medium line-clamp-2">
            {machine.details}
          </p>
        </CardFooter>
      </Card>
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

export default MachineCard;
