import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedin,
  FaSquareFacebook,
  FaXTwitter,
} from "react-icons/fa6";
import logoIcon from "@/assets/images/favicon.png";
import { LuArrowBigRightDash } from "react-icons/lu";
import {
  RiArrowDropRightLine,
  RiMailAddLine,
  RiMapPinLine,
  RiPhoneLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-[1250px] px-2 pt-16 pb-5">
        {/* <div className="mx-auto max-w-md">
          <strong className="block text-center text-xl font-bold text-gray-900 sm:text-3xl">
            Want us to email you with the latest blockbuster news?
          </strong>

          <form className="mt-6">
            <div className="relative max-w-lg">
              <label className="sr-only" htmlFor="email">
                {" "}
                Email{" "}
              </label>

              <input
                className="w-full rounded-full border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
                id="email"
                type="email"
                placeholder="john@doe.com"
              />

              <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </form>
        </div> */}

        <div className="flex flex-col md:flex-row justify-between gap-8 lg:gap-32">
          <div className="basis-[35%]">
            <Link href="/">
              <div className="flex items-center gap-1.5 cursor-pointer py-2">
                <Image className="w-[62px]" src={logoIcon} alt="logo" />
                <div className="text-2xl leading-[1em] italic font-extrabold">
                  <h2 className="text-primary">Lab One</h2>
                  <h3 className="text-secondary">Hospital</h3>
                </div>
                {/* <img className="w-14" src={logoIcon} alt="logo" /> */}
              </div>
            </Link>
            <p className="text-center lg:text-left">
              Welcome to Lab One Hospital. We are best at serving people with
              the best intention to help.
            </p>

            <div className="mt-6 flex justify-center lg:justify-start gap-5 *:text-accent/90 hover:*:text-accent">
              <Link href={"https://facebook.com"} target="_blank">
                <FaSquareFacebook size={20} />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaInstagram size={20} />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaLinkedin size={20} />
              </Link>

              <Link href={"https://facebook.com"} target="_blank">
                <FaXTwitter size={20} />
              </Link>
            </div>
          </div>

          <div className="basis-[65%] grid grid-cols-1 gap-3 text-center lg:grid-cols-3 lg:text-left">
            <div>
              <h4 className="text-primary text-lg font-semibold">Our Links</h4>

              <ul className="mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>About Us</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>Services</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>Departments</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>Diagnostics</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary text-lg font-semibold">
                Important Links
              </h4>

              <ul className="mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>WHO</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>PG Hospital</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>Blood Donate</Link>
                </li>

                <li>
                  <RiArrowDropRightLine />
                  <Link href={"#"}>Blood Bank</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-primary text-lg font-semibold">Contact Us</h4>

              <ul className="mt-5 space-y-1 hover:*:text-primary *:transition-all hover:*:translate-x-1 *:flex *:gap-1 *:items-center">
                <li>
                  <RiPhoneLine />
                  <Link href={"tel:+880 1987009911"}>+880 1987009911</Link>
                </li>
                <li>
                  <RiMailAddLine />
                  <Link href={"mailto:info@labonehospital.com"}>
                    info@labonehospital.com
                  </Link>
                </li>
                <li>
                  <RiMailAddLine />
                  <Link href={"mailto:labonehospital@gmail.com"}>
                    labonehospital@gmail.com
                  </Link>
                </li>
                <li>
                  <RiMapPinLine className="flex-shrink-0 self-start mt-1" />
                  <Link href={"#"} className="text-sm text-left">
                    Tetuibari, DEPZ Road Mojarmil Bus Stand, Kashimpur, Gazipur
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-100 pt-3">
          <p className="text-center text-xs/relaxed text-gray-500 font-medium">
            <span>Labone Hospital ©{new Date().getFullYear()} Created by </span>
            <Link href={"https://websyner.com"} className="text-primary">
              WebSyner
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
