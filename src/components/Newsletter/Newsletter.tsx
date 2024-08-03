import { Image, Input } from "@nextui-org/react";
import LabBtn from "@/utils/LabBtn";
import bgImg from "@/assets/images/an-bg.png";
import menImg from "@/assets/images/news-photo.png";

const Newsletter = () => {
  return (
    <>
      <div
        className={`bg-no-repeat bg-[center_bottom] md:bg-cover -z-10`}
        style={{ backgroundImage: `url(${bgImg.src})` }}
      >
        <div className="mx-auto max-w-[1250px] px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="mt-10 md:mt-44">
              <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative z-10 before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
                NEWSLETTER
              </h6>
              <h2 className="text-4xl md:text-5xl font-bold mt-1.4 md:mt-3 mb-3 md:mb-7">
                Subscribe To Our <br /> Newsletter
              </h2>
              <div className="flex items-center w-full max-w-96 bg-white rounded-full">
                <Input
                  type="text"
                  placeholder="Email Address"
                  classNames={{
                    label:
                      "group-data-[filled-within=true]:-translate-y-[calc(100%_+_theme(fontSize.small)/2_+_15px)]",
                    inputWrapper: [
                      "border-none",
                      "rounded-full",
                      "bg-white",
                      "h-[50px]",
                      "px-6",
                      "group-data-[hover=true]:bg-white",
                      "group-data-[focus=true]:bg-white",
                      "group-data-[focus=true]:border-primary/50",
                    ],
                  }}
                />
                <LabBtn text="Subscribe" link="/about-us" />
              </div>
            </div>
            <div>
              <Image
                removeWrapper
                className="w-[330px] ml-auto object-cover rounded-none"
                src={menImg.src}
                alt="Newsletter Image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
