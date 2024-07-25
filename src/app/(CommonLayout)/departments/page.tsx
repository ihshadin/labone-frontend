import Breadcamp from "@/utils/Breadcamp";
import DepartmentCard from "./DepartmentCard";

const departmentsData = [
  {
    _id: "64b4da56b07a982d6c8d5aedf1",
    name: "Medicine",
    slug: "mri_machine_models_m500",
    details:
      "Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque. Fusce eget condimentum lectus, sed commodo dui. Suspendisse non vehicula ant aecenas placerat finibus metus, at finibus neque.",
    icon: "https://labonehospital.com/img/icon/de-icon01.png",
  },
  {
    _id: "64b4da56b07a982d6c8d5aedf41",
    name: "Gynaecology",
    slug: "mri_machine_models_m5001",
    details:
      "Pellentesque auctor venenatis odio, non iaculis nunc mattis at. In hac habitasse platea dictumst. Donec ut est est.",
    icon: "https://cdn-icons-png.flaticon.com/512/10297/10297768.png",
  },
  {
    _id: "64b4da56b07a982d6c8d5aedf41",
    name: "Urology & Nephrology",
    slug: "mri_machine_models_m5002",
    details:
      "Donec et ligula a quam imperdiet rutrum in ac orci. Suspendisse tempor a risus sit amet pulvinar. Maecenas porta nulla et turpis",
    icon: "https://cdn0.iconfinder.com/data/icons/insurance-line-color/512/Outpatient_Department-512.png",
  },
  {
    _id: "64b4da56b07a982d6c8d5aedf43",
    name: "Pulmonologist & Chest Medicine",
    slug: "mri_machine_models_m5003",
    details:
      "Donec et ligula a quam imperdiet rutrum in ac orci. Suspendisse tempor a risus sit amet pulvinar. Maecenas porta nulla et turpis",
    icon: "https://cdn-icons-png.flaticon.com/256/3140/3140367.png",
  },
];

const DepartmentsPage = () => {
  return (
    <>
      <Breadcamp title={"Our Doctors"} subTitle="Doctors" />
      <div className="mx-auto max-w-[1250px] px-2 py-14 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {departmentsData.map((department) => (
            <DepartmentCard key={department._id} department={department} />
          ))}
        </div>
      </div>
    </>
  );
};

export default DepartmentsPage;
