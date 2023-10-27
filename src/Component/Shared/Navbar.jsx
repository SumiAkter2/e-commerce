import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import "./Navbar.css";
import BrandLogo from "../../assets/banner/logo.png";
import "./Navbar.css";

const Navbar = ({ children }) => {
  const navItem = (
    <>
      <li className="rounded-lg  my-2 ">
        <a>Home</a>
      </li>
      <li className="rounded-lg  my-2">
        <a>Features</a>
      </li>
      <li className="rounded-lg  my-2">
        <a>Pricing</a>
      </li>
      <li className="rounded-lg  my-2">
        <a>Contact Us</a>
      </li>
    </>
  );

  return (
    <div className="drawer drawer-end ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        <div className="flex justify-between items-center bg-gray-200 text-black opacity-80 px-4 py-2 shadow-lg">
          <div className="flex justify-start items-center gap-2  bg-teal-300 p-2 rounded-full">
            <BsFillTelephoneInboundFill />
            <span className="font-bold">+900000000</span>
          </div>
          <div className="flex lg:justify-around  items-center  text-primary">
            <ImFacebook className="lg:mr-6 mr-2 text-teal-500 hover:text-neutral hover:cursor-pointer" />
            <BsTwitter className="lg:mr-6 mr-2 text-teal-500 hover:text-neutral hover:cursor-pointer" />
            <FaLinkedinIn className="lg:mr-6 mr-2 text-teal-500 hover:text-neutral hover:cursor-pointer" />
          </div>
        </div>
        <div className="shadow-lg navbar bg-cyan-700 text-white ">
          <div className="flex-1 font-bold text-2xl">
            <img
              style={{ width: "70px" }}
              src={BrandLogo}
              alt="brand-logo"
              className="lg:mr-4 mr-2"
            />
            <a href="/"> E-Commerce</a>
          </div>
          <div className="flex-none lg:hidden ">
            <label for="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          <div className="flex-none hidden lg:block">
            <ul className="menu  menu-horizontal gap-x-2  ">{navItem}</ul>
          </div>
        </div>

        <div className="w-full">{children}</div>
      </div>
      <div className="drawer-side z-10 ">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-2 overflow-y-auto w-80 bg-base-100">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
