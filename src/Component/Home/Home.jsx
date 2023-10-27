import Contact from "./Contact";
import Features from "./Features";
import Pricing from "./Pricing";
import SliderBanner from "./SliderBanner";

const Home = () => {
  return (
    <div>
      <SliderBanner />
      <Pricing />
      <Features />
      <Contact />
    </div>
  );
};

export default Home;
