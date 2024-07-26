import Breadcamp from "@/utils/Breadcamp";
import ContentArea from "./ContentArea";

const MachinesPage = () => {
  return (
    <>
      <Breadcamp title={"Our Machines"} subTitle="Machine" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <ContentArea />
      </div>
    </>
  );
};

export default MachinesPage;
