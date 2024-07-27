import { Card, CardHeader, CardBody, Avatar, Image } from "@nextui-org/react";
import quoteImg from "@/assets/images/qutation.png";

const TestimonialCard = ({ testimonial }) => {
  return (
    <>
      <div className="relative pt-12 pl-20 pb-5 pr-5">
        <Avatar
          //   isBordered
          //   radius="md"
          className="w-48 h-48 object-cover border-2 border-secondary/30 bg-white p-1 rounded-xl [&_img]:rounded-lg z-10 absolute left-0 top-0"
          src={testimonial.photo}
        />
        <Card className="w-full py-8 pr-10 pl-[135px]">
          <CardHeader className="justify-between p-0">
            <div className="flex gap-5">
              <div className="flex flex-col gap-1 items-start justify-center">
                <h4 className="text-lg md:text-xl font-bold leading-none text-primary">
                  {testimonial.name}
                </h4>
                <h5 className="text-sm font-medium leading-none tracking-tight text-accent/80">
                  {testimonial.treatment}
                </h5>
              </div>
            </div>
            <Image
              removeWrapper
              className="w-12 object-cover"
              src={quoteImg.src}
              alt="Services image"
            />
          </CardHeader>
          <CardBody className="px-3 py-0 text-lg text-accent overflow-hidden mt-5 p-0">
            <p>{testimonial.comment}</p>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default TestimonialCard;
