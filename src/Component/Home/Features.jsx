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
import { featureInfo } from "../info/Info";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay, Pagination } from "swiper/modules";
const Features = () => {
  return (
    <div className="mb-12">
      <div>
        <div className="services-content my-5">
          <div className="bg-black opacity-80 lg:h-96 text-white text-center mt-12">
            <h1 className="lg:text-4xl text-2xl py-12 font-bold px-6 mt-6">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              ullam voluptatum voluptas natus possimus dicta temporibus fuga et
              corporis accusamus?
              <br />
              <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Optio, doloribus. "
            </h1>
            <button className=" btn btn-primary btn-outline lg:w-56 my-6">
              Learn More
            </button>
          </div>
        </div>
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

            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              breakpoints={{
                300: {
                  slidesPerView: 3,
                },
                400: {
                  slidesPerView: 3,
                },
                639: {
                  slidesPerView: 3,
                },
                865: {
                  slidesPerView: 4,
                },
              }}
              navigation={true}
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
              autoplay={{
                delay: 5500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, Autoplay, Navigation]}
              className="lg:mx-12 mx-2"
              style={{
                "--swiper-pagination-color": "#1ba9ca",
                "--swiper-pagination-bullet-size": "16px",
                "--swiper-pagination-bullet-horizontal-gap": "6px",
                "--swiper-pagination-bullet-marginBottom": "6px",
                "--swiper-pagination-bullet-inactive-color": "black",
              }}
            >
              {featureInfo.map((item) => (
                <SwiperSlide key={item._id} item={item}>
                  <div className="my-6">
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
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* <div className="grid lg:grid-cols-5 grid-cols-2 gap-6 my-12 lg:mx-24 mx-12">
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
            </div> */}
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
      </div>
    </div>
  );
};

export default Features;
