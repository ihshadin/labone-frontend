import LabBtn from "@/utils/LabBtn";
import { Image } from "@nextui-org/react";
import { RiArrowDropRightLine } from "react-icons/ri";

type TSportLight = {
  image: string;
  subHeading: string;
  heading: string;
  description: string;
  featureList: string[];
  btnText: string;
  btnLink: string;
};

const SpotlightSection = ({ data }: { data: TSportLight }) => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid md:grid-cols-2 items-center gap-6 md:gap-8 lg:gap-14">
          <div>
            <Image
              removeWrapper
              className="w-full object-cover"
              src={data?.image}
              alt="Services image"
            />
          </div>
          <div>
            <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
              {data?.subHeading}
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-1.5 md:mt-3 mb-3 lg:mb-7">
              {data?.heading}
            </h2>
            <p>{data?.description}</p>
            <ul className="mt-2 md:mt-5 mb-8 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
              {data?.featureList?.map((item: string) => (
                <li key={item}>
                  <RiArrowDropRightLine />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start">
              <LabBtn text={data?.btnText} link={data?.btnLink} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotlightSection;
