import BrandLogo from "../../assets/banner/logo.png";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-cyan-700 text-white w-full">
        <aside className="flex lg:items-center justify-start pl-0">
          <img className="w-24" src={BrandLogo} alt="brand-logo" />
          <p className="text-xl text-start">
            <span className="font-bold"> E-Commerce</span>
            <br />
            Providing reliable tech since 1992
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
