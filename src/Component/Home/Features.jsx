import { FaUser } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { FaDatabase } from "react-icons/fa";
import { FaFileExport } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import { BiMessageRounded } from "react-icons/bi";
import { MdFindInPage } from "react-icons/md";
import { FaFileImport } from "react-icons/fa";
import "./css/Feature.css";
const Features = () => {
  return (
    <div className="mb-12">
      <div>
        {/* ==========services banner============= */}
        <div className="mb-6 ">
          <div className="  text-primary text-center p-6">
            <h1 className="lg:text-4xl text-2xl py-12 font-bold">
              Our Features
            </h1>
            <p>
              Ready to take your productivity to the next level? Complete our
              form to access our virtual assistant services.
            </p>

            <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 my-12 lg:mx-24 mx-12">
              <div className="card ">
                <figure className="pt-6">
                  <FaFileImport fill="#FF533D" size="35px" />
                </figure>
                <div className="card-body items-center justify-start text-center ">
                  <h2 className="card-title text-primary text-3xl my-3">
                    Data Entry
                  </h2>
                </div>
              </div>
              
              <div className="card ">
                <figure className="pt-6">
                  <FaFileImport fill="#FF533D" size="35px" />
                </figure>
                <div className="card-body items-center justify-start text-center ">
                  <h2 className="card-title text-primary text-3xl my-3">
                    Data Entry
                  </h2>
                </div>
              </div>
              <div className="card ">
                <figure className="pt-6">
                  <MdFindInPage fill="#FF533D" size="35px" />
                </figure>
                <div className="card-body  justify-start items-center  ">
                  <h2 className="card-title text-primary text-3xl ">
                    Due Diligence
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===========services content================== */}
      </div>
      {/* ==============bottom ================== */}
      <div>
        {/* <div className="bg-primary h-96 mx-12 lg:mx-24 my-12">
          <div className="icon-bg  opacity-20 h-24  w-24 "></div>
          <h1 className="text-center text-white text-2xl lg:text-3xl italic lg:p-6 pb-4 px-2 font-bold bg-orange-300">
            WHY YOU NEED TO HIRE VIRTARY'S VIRTUAL ASSISTANTS?
          </h1>
          <h1 className="text-center text-white text-xl lg:text-2xl italic lg:p-6 pb-4 px-2 ">
            A big part of financial freedom is having your heart and mind free
            from worry about the what-ifs of life.
          </h1>
        </div> */}
        <div className="services-content my-5">
          <div className="bg-black opacity-80 lg:h-96 text-white text-center mt-12">
            <h1 className="lg:text-4xl text-2xl py-12 font-bold px-6 mt-6">
              "HIRING A VIRTUAL ASSISTANT AS A REMOTE STAFF DEFINITELY
              ACCELERATES YOUR BUSINESS AND YOUR COMPANY FROM 0 TO 740
              HORSEPOWER.
              <br />
              <br />A VIRTUAL ASSISTANT MAKES YOU RUN FASTER, FLY HIGHER!"
            </h1>
            <button className=" btn btn-primary btn-outline lg:w-56 my-6">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
