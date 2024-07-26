import { TMachine } from "@/types/machine.type";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from "@nextui-org/react";
// import Link from "next/link";

const DepartmentCard = ({ department }) => {
  return (
    <>
      {/* <Card className="w-full">
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <span className="text-[12px] text-white uppercase font-medium bg-primary py-0.5 px-2 rounded-full font-tiroBangla">
            {doctor.degree}
          </span>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full object-cover"
          src={doctor.image}
        />
        <CardFooter className="absolute left-1/2 -translate-x-1/2 rounded-large bottom-1.5 w-[calc(100%_-_12px)] shadow bg-white/70 border-t-1 border-zinc-100/50 z-10 backdrop-blur-sm">
          <div className="w-full">
            <Link
              href={doctor.slug}
              className="block text-primary hover:text-primary/90 text-base md:text-lg font-bold text-center font-tiroBangla"
            >
              {doctor.firstName + " " + doctor.lastName}
            </Link>
            <p className="text-accent text-xs font-medium text-center line-clamp-2 font-tiroBangla">
              {doctor.degree}
            </p>
          </div>
        </CardFooter>
      </Card> */}
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
      <Card
        isBlurred
        className="border-none border-primary/30 shadow-[3px_4px_8px] hover:shadow-[3px_4px_8px_inset] shadow-primary/30 hover:shadow-primary/30 cursor-pointer bg-transparent"
      >
        <CardBody className="p-2">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-3 shadow-none *:shadow-none">
              <Image
                alt="Album cover"
                className="p-5 object-cover shadow-none"
                shadow="md"
                src={department.icon}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-9">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary hover:text-primary/90 text-base md:text-2xl font-bold">
                    {department.name}
                  </h3>
                  <p className="text-base text-accent line-clamp-3">
                    {department.details}
                  </p>
                </div>
              </div>

              {/* <div className="flex flex-col mt-3 gap-1">
              <Slider
                aria-label="Music progress"
                classNames={{
                  track: "bg-default-500/30",
                  thumb: "w-2 h-2 after:w-2 after:h-2 after:bg-foreground",
                }}
                color="foreground"
                defaultValue={33}
                size="sm"
              />
              <div className="flex justify-between">
                <p className="text-small">1:23</p>
                <p className="text-small text-foreground/50">4:32</p>
              </div>
            </div> */}

              {/* <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleIcon className="text-foreground/80" />
              </Button>
            </div> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default DepartmentCard;
