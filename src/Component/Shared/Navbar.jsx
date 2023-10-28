import BrandLogo from "../../assets/banner/logo.png";

const Navbar = ({ children }) => {
  const navItem = (
    <>
      <li className="rounded-lg my-2 ">
        <a href="/" className="hover:text-cyan-200">
          Home
        </a>
      </li>
      <li className="rounded-lg  my-2">
        <a href="#feature" className="hover:text-cyan-200">
          Features
        </a>
      </li>
      <li className="rounded-lg  my-2">
        <a href="#pricing" className="hover:text-cyan-200">
          Pricing
        </a>
      </li>
      <li className="rounded-lg  my-2">
        <a href="#contact" className="hover:text-cyan-200">
          Contact Us
        </a>
      </li>
    </>
  );

  return (
    <div>
      <div className="drawer drawer-end fixed z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar px-6 bg-cyan-700 text-white shadow-lg">
            <div className="flex-1  mx-2">
              <img
                style={{ width: "70px" }}
                src={BrandLogo}
                alt="brand-logo"
                className="lg:mr-4 mr-2"
              />
              <a href="/" className="font-bold text-xl">
                {" "}
                E-Commerce
              </a>
            </div>

            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
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
              <ul className="menu menu-horizontal font-bold ">
                {/* Navbar menu content here */}
                {navItem}
              </ul>
            </div>
          </div>
          {/* Page content here */}
          {children}
        </div>

        <div className="drawer-side z-40">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-200 text-cyan-700 font-bold">
            {navItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
