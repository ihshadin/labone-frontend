import { Card, CardHeader, CardBody, Avatar, Image } from "@nextui-org/react";
import quoteImg from "@/assets/images/qutation.png";
import { TTestimonial } from "@/types/testimonial.type";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const TestimonialCard = ({ testimonial }: { testimonial: TTestimonial }) => {
  return (
    <>
      <div className="h-full relative pt-0 md:pt-12 pl-0 md:pl-20 pb-5 pr-0 md:pr-5 overflow-hidden rounded-xl">
        <Avatar
          className="w-24 md:w-48 h-24 md:h-48 object-cover border-2 border-secondary/30 bg-white p-1 rounded-xl [&_img]:rounded-lg z-10 relative md:absolute left-0 top-0 -mb-7 md:mb-0 ml-5 md:ml-0"
          src={testimonial?.photo}
        />
        <Card className="w-full h-full bg-white pt-10 md:pt-8 md:py-8 pr-5 md:pr-10 pl-5 md:pl-[135px]">
          <CardHeader className="justify-between p-0">
            <div className="flex gap-5">
              <div className="flex flex-col gap-0 items-start justify-center">
                <h4 className="text-lg md:text-xl font-bold leading-none text-primary">
                  {testimonial?.name}
                </h4>
                <div className="text-orange-500">
                  <Rating
                    style={{ width: 100 }}
                    readOnly
                    value={testimonial?.rating}
                    isRequired
                  />
                </div>
              </div>
            </div>
            <Image
              removeWrapper
              className="w-10 md:w-12 object-cover"
              src={quoteImg.src}
              alt="Services image"
            />
          </CardHeader>
          <CardBody className="px-3 py-0 text-lg text-accent overflow-hidden mt-3 md:mt-5 p-0 flex-none">
            <p className="line-clamp-[8] md:line-clamp-5">
              {testimonial?.message}
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TestimonialCard;
