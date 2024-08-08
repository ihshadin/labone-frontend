import { TSectionHeader } from "@/types/sectionHeader.type";

const SectionHeader = ({ subHeading, heading, desc }: TSectionHeader) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h6 className="text-center font-medium uppercase text-xs md:text-base text-primary tracking-[2px] py-1.5 md:py-2.5 px-3 md:px-5 inline-block transition-all cursor-context-menu relative before:block before:w-[40%] before:absolute before:inset-0 before:bg-primary/15 before:-z-10 hover:before:w-full before:duration-300">
        {subHeading}
      </h6>
      <h2 className="text-center text-xl md:text-3xl lg:text-5xl font-bold mt-1.5 md:mt-2.5 mb-3 md:mb-5">
        {heading}
      </h2>
      {desc && (
        <p className="text-center text-base w-full max-w-[650px] mx-auto">
          {desc}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
