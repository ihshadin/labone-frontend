export type TAppointment = {
  patientName: string;
  patientAge: string;
  mobileNumber: string;
  appointmentDate: string;
  doctorID: string; // FK
  message: string;
};
