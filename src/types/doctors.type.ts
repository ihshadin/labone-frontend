import { TDepartment } from "./department.type";

export type TDoctor = {
  _id: string;
  serialNumber: number;
  firstName: string;
  lastName: string;
  image: string;
  address: string;
  email: string;
  specialization: string;
  contactNumber: string;
  degree: string;
  departmentID: TDepartment;
  schedules: any[];
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

