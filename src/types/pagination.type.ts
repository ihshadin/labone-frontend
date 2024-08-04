import { TMeta } from "@/types/global.type";

export type TPagination = {
  meta: TMeta;
  handlePaginationChange: (value: number) => void;
};
