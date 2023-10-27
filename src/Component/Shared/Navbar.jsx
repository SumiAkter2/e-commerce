import { FaLinkedinIn } from "react-icons/fa";
import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
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
    <div className="drawer drawer-end fixed top-0">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <div className="flex justify-between items-center bg-white text-black opacity-80 p-4 border-b-2">
          <div className="flex justify-around w-1/2">
            <p className=" lg:block hidden">Park Street USA</p>
            <p className=" ">blackfit@gmail.com</p>
            <p className=" lg:block hidden">Mon-Fri 08:00-18:00</p>
          </div>
          <div className="flex lg:justify-around  items-center  text-primary">
            <ImFacebook className="lg:mr-6 mr-2 hover:text-neutral" />
            <BsTwitter className="lg:mr-6 mr-2  hover:text-neutral" />
            <FaLinkedinIn className="lg:mr-6 mr-2 hover:text-neutral" />
          </div>
        </div>
        <div className="w-full navbar bg-white text-black ">
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

          <div className="flex-none hidden lg:block  ">
            <ul className="menu  menu-horizontal gap-x-2  ">{navItem}</ul>
          </div>
        </div>

        {children}
      </div>
      <div className="drawer-side h-full  z-10">
        <label for="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-2 overflow-y-auto w-80 bg-base-100">{navItem}</ul>
      </div>
    </div>
  );
};

export default Navbar;
