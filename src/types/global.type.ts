import { Dispatch } from "react";

export type TQueryParam = {
  name: string;
  value: boolean | React.Key;
};

export type TSetParams = {
  setParams: Dispatch<React.SetStateAction<TQueryParam[]>>;
};

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};
