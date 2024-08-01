import { TMachine } from "@/types/machine.type";
import { Card, CardFooter, CardHeader, Image, Link } from "@nextui-org/react";

const MachineCard = ({ machine }: { machine: TMachine }) => {
  return (
    <>
      <Card radius="lg" className="border-none w-full h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[10px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full">
            {machine?.country}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src={machine?.photo}
        />
        <CardFooter className="flex-col justify-start items-start bg-white/70 backdrop-blur-sm absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow z-10">
          <Link
            href={`/machines/${machine?._id}`}
            className="text-black text-base md:text-lg font-bold"
          >
            {machine?.name}
          </Link>
          <p className="text-accent text-xs font-medium line-clamp-2">
            {machine?.details}
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MachineCard;
