export type TUser = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userImage: string;
  status: "owner" | "admin" | "patient";
};
