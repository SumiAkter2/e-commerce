import img1 from "../../assets/feature/wifi.png";
import img2 from "../../assets/feature/time.png";
import img3 from "../../assets/feature/rocket.png";
import img4 from "../../assets/feature/plane.png";
import img5 from "../../assets/feature/live.png";
import img6 from "../../assets/feature/blue.png";

const Features = () => {
  return (
    <div>
      <h1 className="text-4xl text-center text-primary font-bold mt-12">
        NETREXO FIBERNET ADVANTAGES
      </h1>
      <div className="grid lg:grid-cols-3 gap-6 relative">
        <div className="flex flex-col justify-center items-center">
          <img src={img1} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center  ">
          <img src={img2} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={img3} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={img4} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img src={img5} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <img src={img6} alt="logo" />
          <h1 className="font-bold text-primary mt-4">
            Butter Smooth Streaming
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Features;
