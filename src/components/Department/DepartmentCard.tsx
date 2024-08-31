// 'use client'
import { TDepartment } from "@/types/department.type";
import { Card, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

const DepartmentCard = ({ department }: { department: TDepartment }) => {
  return (
    <Link
      href={{
        pathname: "/doctors",
        query: { departmentId: `${department._id}` },
      }}
    >
      <Card
        isBlurred
        className="border-none border-primary/30 shadow-[3px_4px_8px] hover:shadow-[3px_4px_8px_inset] shadow-primary/30 hover:shadow-primary/30 cursor-pointer bg-transparent"
      >
        <CardBody className="p-2">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="hidden md:flex relative col-span-6 md:col-span-3 shadow-none *:shadow-none rounded-lg">
              <Image
                alt="Album cover"
                className="p-2 object-cover shadow-none !rounded-full"
                shadow="md"
                src={department.icon}
                width="100%"
              />
            </div>

            <div className="flex flex-col col-span-6 md:col-span-9">
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <h3 className="text-primary hover:text-primary/90 text-xl md:text-2xl font-bold">
                    {department.name}
                  </h3>
                  <p className="text-[13px] md:text-base text-accent line-clamp-3">
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
    </Link>
  );
};

export default DepartmentCard;
