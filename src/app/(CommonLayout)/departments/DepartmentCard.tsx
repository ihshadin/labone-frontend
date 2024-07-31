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
      <Card
        isBlurred
        className="border-none border-primary/30 shadow-[3px_4px_8px] hover:shadow-[3px_4px_8px_inset] shadow-primary/30 hover:shadow-primary/30 cursor-pointer bg-transparent"
      >
        <CardBody className="p-2">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
            <div className="relative col-span-6 md:col-span-3 shadow-none *:shadow-none">
              <Image
                alt="Album cover"
                className="w-20 md:w-full mx-auto md:p-5 object-cover shadow-none"
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
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default DepartmentCard;
