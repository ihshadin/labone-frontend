// "use client";
import "@/styles/lab-btn.css";
import { TButton } from "@/types/button.type";
import Link from "next/link";

const LabBtn = ({ link, text }: TButton) => {
  // console.log(href);
  return (
    <Link href={link || "#"} className="lab-one-btn text-white">
      <span>{text}</span>
    </Link>
  );
};

export default LabBtn;
