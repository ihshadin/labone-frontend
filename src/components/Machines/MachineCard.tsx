import { TMachine } from "@/types/machine.type";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const MachineCard = ({
  machine,
  linkMachine,
}: {
  machine: TMachine;
  linkMachine?: string;
}) => {
  return (
    <>
      <Card radius="lg" className="border-none w-full group">
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-[250px] object-cover rounded-none"
          src={machine?.photo}
        />
        <CardFooter className="flex-col justify-start items-center bg-white group-hover:-translate-y-3 transition-all">
          <Link
            href={`/${linkMachine ? linkMachine : "machines"}/${machine?._id}`}
            className="text-black text-base md:text-2xl font-bold text-center"
          >
            {machine?.name}
          </Link>
          <p className="text-accent text-base font-medium line-clamp-1">
            {machine?.country}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MachineCard;
