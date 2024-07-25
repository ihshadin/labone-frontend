"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import LabBtn from "@/utils/LabBtn";
import logo from "@/assets/images/labOneLogoThik.png";
import { HiMiniXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "about-us",
      text: "About Us",
    },
    {
      link: "service",
      text: "Services",
    },
    {
      link: "departments",
      text: "Departments",
    },
    {
      link: "doctors",
      text: "Doctors",
    },
    {
      link: "machines",
      text: "Machines",
    },
    {
      link: "diagnostics",
      text: "Diagnostics",
    },
  ];

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="[&_header]:max-w-[1250px] [&_header]:px-2 [&_header]:py-2 [&_header]:h-auto"
      >
        <NavbarContent className="!grow-0 !basis-auto">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden px-0.5 py-0.5 border border-primary w-auto rounded"
            icon={
              isMenuOpen ? (
                <HiMiniXMark size={26} />
              ) : (
                <HiOutlineBars3BottomLeft size={26} />
              )
            }
          />
          <NavbarBrand>
            <Image
              src={logo}
              className="w-auto h-10 md:h-16 object-cover"
              alt="Lab One Hospital"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden sm:flex gap-10 text-accent"
          justify="end"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="text-accent font-medium" href={item.link}>
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end" className="!grow-0 w-auto ml-10">
          <NavbarItem className="hidden sm:inline-block ">
            <LabBtn link="/" text="Appointment" />
          </NavbarItem>
          <NavbarItem className="inline-block md:hidden">
            <Link
              href="/"
              className="px-5 py-2 text-white bg-gradient-to-r from-primary to-[#07CCEC] rounded-full"
            >
              Appointment
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link className="w-full" href={item.link}>
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
      {/* <div>
        <div className="mx-auto max-w-[1250px] px-2">
          <div className="text-left">
            <Image
              src={logo}
              className="w-auto h-20 object-cover"
              alt="Lab One Hospital"
            />
          </div>
          <div className="text-left">
            <Image
              src={logo}
              className="w-auto h-20 object-cover"
              alt="Lab One Hospital"
            />
          </div>
          <div>
            <LabBtn link="/" text="Appointment" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default NavBar;
