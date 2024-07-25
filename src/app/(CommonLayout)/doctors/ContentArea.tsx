import { TMachine } from "@/types/machine.type";
import DoctorCard from "./DoctorCard";

const doctorsData = [
  {
    _id: "64b4da56b07a982d6c8d5aef1",
    firstName: "ডাঃ মোঃ ইয়াসির আরাফাত",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m500",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    degree: "পরিপাকতন্ত্র, লিভার ও মেডিসিন বিশেষজ্ঞ",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef2",
    firstName: "ডাঃ আরিফা",
    lastName: "আখতার",
    slug: "mri_machine_model_m5002",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%201.jpg",
    degree: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও বন্ধ্যাত্ব বিশেষজ্ঞ ও সার্জন।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef5",
    firstName: "ডাঃ তোহমিনা",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m5f00",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%204.jpg",
    degree: "স্ত্রী রোগ, প্রসূতি বিদ্যা ও গাইনি ক্যান্সার বিশেষজ্ঞ ও সার্জন।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef6",
    firstName: "সহযোগী অধ্যাপক ডাঃ এ এ এম",
    lastName: "জহুরুল ইসলাম",
    slug: "mri_machine_model_m5s00",
    image:
      "https://labonehospital.com/admin/doctorimg/Lab%20one%20Hospital%20doctor%2010.jpg",
    degree: "বক্ষব্যাধি, এ্যাজমা ও মেডিসিন রোগ বিশেষজ্ঞ।",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef7",
    firstName: "সহযোগী অধ্যাপক লেঃ কর্নেল (ডাঃ) জাহিদ হাসান",
    lastName: "আরাফাত",
    slug: "mri_machine_model_m50s0",
    image:
      "https://labonehospital.com/admin/doctorimg/Untitled%20design%20(71).jpg",
    degree: "হাড়জোড়া,পঙ্গু ,বাত ব্যথা ও ট্রমা বিশেষজ্ঞ ও সার্জন।",
  },
];

const ContentArea = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {doctorsData.map((doctor) => (
        <DoctorCard key={doctor._id} doctor={doctor} />
      ))}
    </div>
  );
};

export default ContentArea;
