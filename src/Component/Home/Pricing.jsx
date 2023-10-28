import bg from "../../assets/feature/bg.png";
import { pricingInfo } from "../info/Info";
import "./css/Feature.css";
const Pricing = () => {
  return (
    <div>
      <div className="  text-center p-6">
        {/* <div className="divider divider-cyan-700 "></div> */}
        <h1 className="lg:text-4xl text-2xl py-12 font-bold uppercase text-primary">
          Netrexo Broadband Tariff
        </h1>

        <div className="grid lg:grid-cols-3 gap-6 ">
          {pricingInfo.map((info) => (
            <div key={info.id}>
              <div
                className=" p-6 text-center grid justify-center items-center lg:w-80 w-72 h-[500px] shadow-lg mx-auto"
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

      <div className="flex justify-center items-center mt-6 ">
        <button className="btn btn-primary">View All</button>
      </div>
    </div>
  );
};

export default Pricing;
