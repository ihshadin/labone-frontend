import Breadcamp from "@/utils/Breadcamp";
import ContentArea from "@/components/Department/ContentArea";

const DepartmentsPage = () => {
  return (
    <>
      <Breadcamp title={"Our Departments"} subTitle="Departments" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <ContentArea />
      </div>
    </>
  );
};

export default DepartmentsPage;
