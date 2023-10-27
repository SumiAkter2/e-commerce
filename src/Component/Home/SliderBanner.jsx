import banner1 from "../../assets/banner/banner2.png";

const SliderBanner = () => {
  return (
    <div className="hero bg-primary  ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner1} className="max-w-2xl rounded-lg " />
        <div className="text-start lg:w-1/2 px-6">
          <h1 className="text-5xl font-bold text-white">
            Get benefits for every successfull referral.
          </h1>
          <p className="py-6">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            Enim labor esse deleniti perspiciatis? Ad eos nihil sequi,
            recusandae maxime esse alias.
          </p>
          <button className="btn  btn-secondary w-48">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
