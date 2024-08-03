import { Image } from "@nextui-org/react";
import serviceLine from "@/assets/images/sr-line.png";
import icon1 from "@/assets/images/sr-icon01.png";
import icon2 from "@/assets/images/sr-icon02.png";
import icon3 from "@/assets/images/sr-icon03.png";

const SpecialService = () => {
  return (
    <>
      <div className="mx-auto max-w-[1250px] px-2 py-10 lg:py-16">
        <div
          className="grid md:grid-cols-3 gap-8 md:gap-16 bg-no-repeat bg-[center_top_30px]"
          style={{ backgroundImage: `url(${serviceLine.src})` }}
        >
          <div>
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={icon1.src}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                24/7 Ambulance
              </h5>
              <p className="text-center">
                We provide 24 hours Ambulance anywhere in all over the country.
              </p>
            </div>
          </div>
          <div className="md:mt-8">
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={icon2.src}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                Medication Service
              </h5>
              <p className="text-center">
                We have the largest collection of medicines in our own pharmacy.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center mx-auto w-[120px] h-[120px] bg-white shadow-[3px_4px_15px] shadow-primary/15 rounded-full p-2.5 text-center">
              <Image
                removeWrapper
                className="w-12 object-cover rounded-none"
                src={icon3.src}
                alt="Services image"
              />
            </div>
            <div className="mt-5">
              <h5 className="text-lg font-semibold text-center mb-1">
                24/7 Emergency Depertment
              </h5>
              <p className="text-center">
                Our Doctors are avaibale in our emergency depertment for 24
                hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpecialService;
