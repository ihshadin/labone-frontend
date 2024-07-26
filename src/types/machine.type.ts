import { Dispatch } from "react";

export type TMachine = {
  _id: string;
  photo: string;
  name: string;
  slug: string;
  country: string;
  details: string;
};
export type TUpdateMachine = {
  updateModalOpen: boolean;
  setUpdateModalOpen: Dispatch<React.SetStateAction<boolean>>;
  machineData: TMachine;
};
