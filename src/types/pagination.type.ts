import { TMeta } from "@/types/global.type";

export type TPagination = {
  meta: TMeta;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  handlePaginationChange: (value: number) => void;
};
