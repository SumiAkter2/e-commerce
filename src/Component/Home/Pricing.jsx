import bg from "../../assets/feature/bg1.png";
import line from "../../assets/feature/line.png";
import headerImage from "../../assets/feature/header.png";
import { pricingInfo } from "../info/Info";
import { PiArrowRightBold } from "react-icons/pi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
const Pricing = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <img src={line} alt="img" className="mt-12 mb-4" />
        <h1 className="lg:text-4xl text-2xl font-bold uppercase text-primary mb-6">
          Netrexo Broadband Tariff
        </h1>
        <img src={headerImage} alt="img" className="mb-12" />

        <div className="lg:grid lg:grid-cols-3 gap-6 hidden">
          {pricingInfo.map((info) => (
            <div key={info.id}>
              <div
                className=" p-6 text-center grid justify-center items-center lg:w-80 w-72 h-[500px] shadow-lg mx-auto  "
                style={{
                  background: `url(${bg})`,
                  backgroundRepeat: "no-repeat",
                }}
              >
                <h1 className="text-primary text-3xl font-bold">{info.name}</h1>
                <h1>{info.des}</h1>
                <div className="flex justify-center items-center p-4">
                  <img className="h-18 w-18" src={info.icon} alt="icon" />
                </div>
                <h1 className="text-primary font-bold text-3xl mt-12 relative">
                  <span className="text-sm absolute top-[-10px] left-10">
                    Rs
                  </span>
                  {info.price}
                  <span className="text-sm text-black">/mo</span>
                </h1>

                <h1>{info.pack1}</h1>
                <h1>{info.pack2}</h1>
                <button className="btn btn-primary mt-4">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* for phone */}

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        navigation={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper lg:hidden block"
        style={{
          "--swiper-pagination-color": "#0e7490",
          "--swiper-pagination-bullet-size": "16px",

          "--swiper-pagination-bullet-inactive-size": "16px",
          "--swiper-pagination-bullet-inactive-color": "black",
        }}
      >
        {pricingInfo.map((info) => (
          <SwiperSlide key={info.id}>
            <div
              className=" p-6 text-center grid justify-center items-center  w-72 h-[500px] shadow-lg mx-auto my-12"
              style={{
                background: `url(${bg})`,
                backgroundRepeat: "no-repeat",
              }}
            >
              <h1 className="text-primary text-3xl font-bold">{info.name}</h1>
              <h1>{info.des}</h1>
              <div className="flex justify-center items-center p-4">
                <img className="h-18 w-18" src={info.icon} alt="icon" />
              </div>
              <h1 className="text-primary font-bold text-3xl mt-12 relative">
                <span className="text-sm absolute top-[-10px] left-10">Rs</span>
                {info.price}
                <span className="text-sm text-black">/mo</span>
              </h1>

              <h1>{info.pack1}</h1>
              <h1>{info.pack2}</h1>
              <button className="btn btn-primary mt-4">Buy Now</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center items-center mt-6 ">
        <button className="btn btn-primary">
          View All <PiArrowRightBold size='20px'/>
        </button>
      </div>
    </div>
  );
};

export default Pricing;
