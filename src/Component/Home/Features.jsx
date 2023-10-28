import img1 from "../../assets/feature/wifi.png";
import img2 from "../../assets/feature/time.png";
import img3 from "../../assets/feature/mike.png";
import img4 from "../../assets/feature/web.png";
import img5 from "../../assets/feature/live.png";
import img6 from "../../assets/feature/blue.png";
import line from "../../assets/feature/line.png";
import headerImage from "../../assets/feature/header.png";

const Features = () => {
  return (
    <div className="z-50 lg:h-screen h-full" id="feature">
      <div className="flex flex-col justify-center items-center mt-12 px-4">
        <img src={line} alt="img" className="mt-12 mb-4" />
        <h1 className="lg:text-4xl text-2xl font-bold uppercase text-primary mb-6">
          NETREXO FIBERNET ADVANTAGES
        </h1>
        <img src={headerImage} alt="img" />
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1  gap-6 relative z-50 lg:max-w-3xl  lg:mx-10 mx-12 mt-12 mb-24">
        <div className="flex flex-col justify-center items-center shadow-2xl  w-64 p-4 rounded-lg lg:absolute lg:top-[0px] lg:left-[100px]">
          <img src={img1} alt="logo" />
          <h1 className="font-bold text-primary mt-4">Dual Brand wifi</h1>
        </div>
        <div className="flex flex-col justify-center items-center  shadow-2xl  w-64 p-4 lg:absolute lg:top-[50px] lg:left-[450px]">
          <img src={img2} alt="logo" />
          <h1 className="font-bold text-primary mt-4">1Gbs speed</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-2xl  w-64 p-4 lg:absolute lg:top-[120px] lg:left-[800px]">
          <img src={img3} alt="logo" />
          <h1 className="font-bold text-primary mt-4">24/7 support</h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-2xl  w-64 p-4  lg:absolute lg:top-[200px] lg:left-[100px]">
          <img src={img4} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Equal Upload And Download Speed
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-2xl  w-64 p-4 lg:absolute lg:top-[300px] lg:left-[450px] ">
          <img src={img5} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            {" "}
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center shadow-2xl  w-64 p-4  lg:absolute lg:top-[350px] lg:left-[800px]">
          <img src={img6} alt="logo" />
          <h1 className="font-bold text-primary mt-4">Self Healing Network</h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
