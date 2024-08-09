import { TDoctor } from "./doctors.type";

export type TSchedule = {
  _id: string;
  doctorID: TDoctor;
  scheduleDay: string;
  startTime: string;
  endTime: string;
};
