"use client";
import React, { useEffect, useState } from "react";
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
import logo from "@/assets/images/labOneLogoThik.png";
import { HiMiniXMark } from "react-icons/hi2";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";
// import DoctorsSearch from "@/utils/DoctorsSearch";
import AppointmentModalSection from "@/utils/AppointmentModal/AppointmentModalSection";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      link: "/",
      text: "Home",
    },
    {
      link: "/about-us",
      text: "About Us",
    },
    {
      link: "/services",
      text: "Services",
    },
    {
      link: "/departments",
      text: "Departments",
    },
    {
      link: "/doctors",
      text: "Doctors",
    },
    {
      link: "/machines",
      text: "Machines",
    },
    {
      link: "/diagnostics",
      text: "Diagnostics",
    },
    {
      link: "/gallery",
      text: "Gallery",
    },
  ];

  // Submenu items for "More"
  // const moreMenuItems = [
  //   { link: "/reception", text: "Reception" },
  //   { link: "/radiology-imaging", text: "Radiology & Imaging" },
  //   { link: "/emergency-unit", text: "Emergency Unit" },
  //   { link: "/pharmacy", text: "Pharmacy" },
  //   { link: "/it-dept", text: "IT dept." },
  // ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`[&_header]:max-w-[1250px] [&_header]:px-2 [&_header]:py-2 [&_header]:h-auto ${
          isSticky &&
          "fixed left-0 top-0 w-full animate-slideDown data-[active=true]:text-primary shadow-[0px_5px_8px] shadow-primary/20"
        }`}
      >
        <NavbarContent className="!grow-0 !basis-auto">
          <NavbarBrand>
            <Image
              src={logo}
              className="w-auto h-10 md:h-16 object-cover"
              alt="Lab One Hospital"
            />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent
          className="hidden lg:!flex gap-10 text-accent"
          justify="end"
        >
          {menuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item.link}-${index}`}
              isActive={pathname == item?.link}
              className="font-medium text-accent"
            >
              <Link
                className={`font-medium hover:text-primary ${
                  pathname === item?.link ? "text-primary" : "text-accent"
                }`}
                href={item.link}
              >
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}

          {/* More dropdown menu */}
          {/* <NavbarMenuItem className="relative group font-medium text-accent">
            <span className="cursor-pointer">More+</span>
            <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 ease-in-out ">
              {moreMenuItems.map((item, index) => (
                <Link
                  key={`${item.link}-${index}`}
                  href={item.link}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </NavbarMenuItem> */}
        </NavbarContent>

        <NavbarContent justify="end" className="!grow-0 w-auto ml-6">
          <NavbarItem className="hidden lg:inline-block ">
            <AppointmentModalSection />
            {/* <DoctorsSearch /> */}
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:!hidden px-1 py-1 border border-primary w-auto rounded"
            icon={
              isMenuOpen ? (
                <HiMiniXMark size={26} />
              ) : (
                <FaBarsStaggered size={26} />
              )
            }
          />
        </NavbarContent>
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.link}-${index}`}>
              <Link className="w-full" href={item.link}>
                {item.text}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarItem className="inline-block lg:hidden">
            {/* <DoctorsSearch /> */}
            <AppointmentModalSection />
          </NavbarItem>
        </NavbarMenu>
      </Navbar>
    </>
  );
};

export default NavBar;
