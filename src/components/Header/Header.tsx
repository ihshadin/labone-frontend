import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import { RiMailAddLine, RiPhoneLine } from "react-icons/ri";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="text-white bg-gradient-to-r from-primary to-[#07CCEC] hidden md:block">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mx-auto max-w-[1250px] p-2">
          <div>
            <ul className="flex flex-col md:flex-row items-start md:items-center gap-0 md:gap-5 hover:*:text-white/90 *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
              <li>
                <RiMailAddLine />
                <Link href={"mailto:labonehospital@gmail.com"}>
                  labonehospital@gmail.com
                </Link>
              </li>
              <li>
                <RiPhoneLine />
                <Link href={"tel:+880 1987009911"}>+880 1987009911</Link>
              </li>
            </ul>
          </div>
          <div className="self-end">
            <div className="flex justify-center lg:justify-start gap-5 *:text-lg *:p-2 *:rounded-full *:bg-white *:text-primary hover:*:text-primary/80">
              <Link href={"https://facebook.com"} target="_blank">
                <FaSquareFacebook />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaInstagram />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaLinkedin />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* NavBar */}
      <NavBar />
    </header>
  );
};

export default Header;
