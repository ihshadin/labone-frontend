import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import image from "@/assets/images/bread-bg.jpg";
import { TBreadcamp } from "@/types/breadcamp.type";

const Breadcamp = ({
  title,
  subTitle,
  bgImage,
  middlePageText,
  middlePageLink,
}: TBreadcamp) => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-6 h-48 bg-center bg-cover bg-no-repeat backdrop-blur-xl"
      style={{
        backgroundImage: `url(${bgImage ? bgImage : image.src})`,
      }}
    >
      <h2 className="text-6xl font-bold">{title}</h2>
      <div className="flex items-center gap-3 text-sm">
        <Link className="font-medium " href="/">
          Home
        </Link>
        {middlePageText && (
          <>
            <span>
              <FaAngleRight />
            </span>
            {/* <span className="text-primary/80 hover:text-primary">
              {middlePageText}
            </span> */}
            <Link className="font-medium " href={middlePageLink || "#"}>
              {middlePageText}
            </Link>
          </>
        )}
        <span>
          <FaAngleRight />
        </span>
        <span className="text-primary/80 hover:text-primary">
          {subTitle ? subTitle : title}
        </span>
      </div>
    </div>
  );
};

export default Breadcamp;
