import banner1 from "../../assets/banner/banner2.png";

const SliderBanner = () => {
  return (
    <div className="hero bg-primary  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner1} className="lg:max-w-2xl rounded-lg " />
        <div className="text-start lg:w-1/2 px-6 text-white mb-12">
          <h1 className="lg:text-5xl text-3xl  font-bold mb-3">
            Get benefits for every successfull referral.
          </h1>
          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            Enim labor esse deleniti perspiciatis? Ad eos nihil sequi,
            recusandae maxime esse alias.
          </p>
          <button className="btn  btn-secondary w-48 mt-6">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
