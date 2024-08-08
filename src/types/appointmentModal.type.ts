import { Dispatch } from "react";

export type TAppointmentModal = {
  isOpen: boolean;
  setIsOpen: Dispatch<React.SetStateAction<boolean>>;
  selectDoctor?: string;
};
