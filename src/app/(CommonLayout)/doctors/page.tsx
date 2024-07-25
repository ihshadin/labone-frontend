import Breadcamp from "@/utils/Breadcamp";
import ContentArea from "./ContentArea";

const DoctorsPage = () => {
  return (
    <>
      <Breadcamp title={"Our Doctors"} subTitle="Doctors" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <ContentArea />
      </div>
    </>
  );
};

export default DoctorsPage;
