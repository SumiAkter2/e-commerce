import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/banner/banner4.png";
import banner2 from "../../assets/banner/banner2.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Autoplay, Pagination } from "swiper/modules";

const SliderBanner = () => {
  return (
    <div className="m-0">
      <Swiper
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
        className="mySwiper"
        style={{
          "--swiper-pagination-color": "#1ba9ca",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-marginBottom": "6px",
          "--swiper-pagination-bullet-inactive-color": "black",
        }}
      >
        <SwiperSlide>
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={banner1} className="max-w-2xl rounded-lg " />
              <div className="text-start lg:w-1/2 px-6">
                <h1 className="text-5xl font-bold text-cyan-700">
                  Box Office News!
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-ghost bg-cyan-700 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* slider 2 */}
        <SwiperSlide>
          <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={banner2} className="max-w-2xl rounded-lg " />
              <div className="text-start lg:w-1/2 px-6">
                <h1 className="text-5xl font-bold text-cyan-700">
                  Box Office News!
                </h1>
                <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-ghost bg-cyan-700 text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 lg:mx-24 mx-12 mt-12">
        <BannerInfo
          cardTitle="Profit Split "
          cardInfo="You Take 60%,We Take 40%"
          bgClass="bg-black border-white border-4  hover:border-primary"
        ></BannerInfo>
        <BannerInfo
          cardTitle="Maximize Your Gains with Vantage Capital FX"
          cardInfo="Our expert team maximizes your investment potential with exceptional service."
          bgClass="bg-primary border-white border-4  hover:border-black"
        ></BannerInfo>
        <BannerInfo
          cardTitle="Trustability"
          cardInfo="We are 100% loyal to our clients "
          bgClass="bg-black border-white border-4 hover:border-primary"
        ></BannerInfo>
      </div>
      <div className="fixed md:right-10 right-2  bottom-5 z-30 text-black">
        <WhatsAppWidget
          phoneNumber="27764396155"
          message="🌟 Welcome to our WhatsApp Business channel! 🌟
We are delighted to assist you in achieving the best results and ensuring your trust in our services. Your satisfaction is our priority.
 **For any other inquiries or assistance, please enter your name and your inquiry below, and we'll be at your service.**"
          companyName="Vantage Capital FX"
        >
          <IoLogoWhatsapp color="#1CAACA" size="55px" />
        </WhatsAppWidget>
      </div> */}
    </div>
  );
};

export default SliderBanner;
