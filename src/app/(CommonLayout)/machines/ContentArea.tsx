import { TMachine } from "@/types/machine.type";
import MachineCard from "./MachineCard";

const machineData = [
  {
    _id: "64b4da56b07a982d6c8d5aef1",
    photo: "https://labonehospital.com/admin/machineimage/IMG_0785.jpg",
    name: "MRI Machine Model M500",
    slug: "mri_machine_model_m500",
    country: "USA",
    details:
      "The MRI Machine Model M500 is a top-tier imaging device known for its clarity and precision. Developed in the USA, it is equipped with the latest technology for enhanced diagnostic capabilities.Features High-resolution imaging Advanced noise reduction Rapid scan times Ergonomic designApplicationsThis machine is ideal for neurological, musculoskeletal, and cardiovascular imaging, providing detailed scans that facilitate accurate diagnoses.SpecificationsResolution:  2560 x 2560 pixels Power Supply:  240V, 60Hz Weight:  200 kg Dimensions:  140 cm x 100 cm x 180 cmWarrantyThe MRI Machine Model M500 comes with a 7-year warranty for reliable service and support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef2",
    photo: "https://nextui.org/images/card-example-5.jpeg",
    name: "Ultrasound Machine Model U300",
    slug: "utrasound_machine_model_u300",
    country: "Japan",
    details:
      "The Ultrasound Machine Model U300 from Japan offers superior imaging performance with cutting-edge technology. It is designed to provide detailed and accurate images for various medical assessments.Features Real-time imaging High-frequency transducers Portable design Intuitive interfaceApplicationsThis machine is widely used in obstetrics, gynecology, cardiology, and general imaging, making it a versatile tool in medical diagnostics.SpecificationsResolution:  1920 x 1080 pixels Power Supply:  220V, 50Hz Weight:  50 kg Dimensions:  80 cm x 60 cm x 140 cmWarrantyThe Ultrasound Machine Model U300 includes a 5-year warranty for comprehensive support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef3",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1976%20(1).jpg",
    name: "CT Scanner Model C700",
    slug: "ct_scanner_model_c700",
    country: "Germany",
    details:
      "The CT Scanner Model C700 is a premium imaging solution developed in Germany. It features advanced scanning technology for clear and detailed cross-sectional images.Features High-speed scanning Low radiation dose Enhanced image clarity User-friendly interfaceApplicationsIdeal for use in oncology, neurology, and emergency medicine, this CT scanner provides precise and reliable imaging for accurate diagnoses.SpecificationsResolution:  2048 x 2048 pixels Power Supply:  220V, 50Hz Weight:  250 kg Dimensions:  160 cm x 120 cm x 200 cmWarrantyThe CT Scanner Model C700 comes with a 6-year warranty for dependable performance.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef4",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1222%20(1).jpg",
    name: "Digital X-Ray Machine Model X400",
    slug: "digital_x-ray_machine_model_x400",
    country: "Italy",
    details:
      "The Digital X-Ray Machine Model X400, crafted in Italy, offers high-quality imaging with advanced digital technology. It ensures precise and quick diagnostics.Features High-definition imaging Quick processing time Ergonomic design Low radiation exposureApplicationsThis machine is widely used in orthopedics, chest imaging, and trauma care, providing clear images for accurate medical assessments.SpecificationsResolution:  2300 x 2300 pixels Power Supply:  220V, 50Hz Weight:  180 kg Dimensions:  130 cm x 90 cm x 170 cmWarrantyThe Digital X-Ray Machine Model X400 includes a 5-year warranty for reliable service.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef5",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1220%20(1).jpg",
    name: "PET Scanner Model P200",
    slug: "PET-Scanner-Model-P200",
    country: "France",
    details:
      "The PET Scanner Model P200 from France provides advanced positron emission tomography for detailed imaging of metabolic processes. It is a valuable tool in oncology and neurology.Features High sensitivity Fast acquisition time Precise imaging Comfortable patient experienceApplicationsUsed primarily in cancer detection and brain studies, this scanner offers accurate and detailed metabolic images, aiding in effective diagnosis and treatment planning.SpecificationsResolution:  2048 x 2048 pixels Power Supply:  230V, 50Hz Weight:  220 kg Dimensions:  150 cm x 100 cm x 180 cmWarrantyThe PET Scanner Model P200 comes with a 6-year warranty for assured reliability.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef6",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1218%20(1).jpg",
    name: "Mammography Machine Model M300",
    slug: "Mammography-Machine-Model-M300",
    country: "Canada",
    details:
      "The Mammography Machine Model M300, developed in Canada, is designed for precise breast imaging. It offers high-resolution images for early detection of breast cancer.Features High-resolution imaging Low radiation dose Comfortable positioning Advanced softwareApplicationsThis machine is essential for breast cancer screening and diagnostics, providing clear and accurate images to aid in early detection and treatment.SpecificationsResolution:  3000 x 3000 pixels Power Supply:  220V, 50Hz Weight:  200 kg Dimensions:  140 cm x 90 cm x 160 cmWarrantyThe Mammography Machine Model M300 includes a 7-year warranty for dependable service.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef7",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1214%20(1).jpg",
    name: "Bone Densitometer Model B100",
    slug: "Bone-Densitometer-Model-B100",
    country: "UK",
    details:
      "The Bone Densitometer Model B100 from the UK is designed to measure bone density with high accuracy. It provides vital information for diagnosing and monitoring osteoporosis.Features High-precision measurements Low radiation dose Easy-to-use interface Fast scan timesApplicationsThis machine is widely used in diagnosing osteoporosis and other bone-related conditions, offering accurate measurements to guide treatment.SpecificationsResolution:  1800 x 1800 pixels Power Supply:  220V, 50Hz Weight:  150 kg Dimensions:  120 cm x 80 cm x 140 cmWarrantyThe Bone Densitometer Model B100 comes with a 5-year warranty for reliable support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef8",
    photo: "https://labonehospital.com/admin/machineimage/IMG_1212%20(1).jpg",
    name: "ECG Machine Model E500",
    slug: "ECG-Machine-Model-E500",
    country: "China",
    details:
      "The ECG Machine Model E500, developed in China, offers precise and reliable electrocardiogram readings. It is designed for accurate monitoring of heart activity.Features High-resolution display Portable design Wireless connectivity Easy-to-use interfaceApplicationsIdeal for cardiology departments, this machine provides accurate ECG readings to help diagnose and monitor heart conditions.SpecificationsResolution:  1280 x 720 pixels Power Supply:  220V, 50Hz Weight:  20 kg Dimensions:  40 cm x 30 cm x 20 cmWarrantyThe ECG Machine Model E500 includes a 4-year warranty for comprehensive support.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef9",
    photo: "https://labonehospital.com/admin/machineimage/IMG_0778.jpg",
    name: "Anesthesia Machine Model A700",
    slug: "Anesthesia-Machine-Model-A700",
    country: "Australia",
    details:
      "The Anesthesia Machine Model A700 from Australia is designed for reliable and safe delivery of anesthesia. It features advanced monitoring and control systems.Features High-precision delivery Advanced monitoring Ergonomic design Safety alarmsApplicationsThis machine is used in surgical and procedural settings, ensuring accurate and controlled delivery of anesthesia for patient safety.SpecificationsResolution:  N/A Power Supply:  220V, 50Hz Weight:  100 kg Dimensions:  90 cm x 60 cm x 150 cmWarrantyThe Anesthesia Machine Model A700 comes with a 5-year warranty for dependable service.",
  },
  {
    _id: "64b4da56b07a982d6c8d5aef10",
    photo: "https://labonehospital.com/admin/machineimage/machine1.jpg",
    name: "Ventilator Model V800",
    slug: "Ventilator-Model-V800",
    country: "India",
    details:
      "The Ventilator Model V800, manufactured in India, provides advanced respiratory support for critical care. It is equipped with the latest technology for optimal patient ventilation.Features Advanced ventilation modes High-resolution touch screen Real-time monitoring Portable and compact designApplicationsSuitable for use in ICU, emergency, and transport settings, this ventilator ensures reliable and effective respiratory support for patients in critical condition.SpecificationsResolution:  1024 x 768 pixels Power Supply:  220V, 50Hz Weight:  60 kg Dimensions:  70 cm x 50 cm x 100 cmWarrantyThe Ventilator Model V800 comes with a 5-year warranty for assured performance and support.",
  },
];

const ContentArea = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
      {machineData.map((machine) => (
        <MachineCard key={machine._id} machine={machine} />
      ))}
    </div>
  );
};

export default ContentArea;
