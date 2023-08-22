import { hero_landingpage } from "../assets";

const Hero = () => {
  return (
    <section className="flex flex-col lg:absolute items-center justify-center">
      <div className="flex flex-col items-center lg:pb-40 absolute z-10">
        <h2 className="text-white text-[20px] lg:text-[45px] font-libre font-medium ">
          Helping Others
        </h2>
        <h1 className="text-white text-[35px] lg:text-[80px] font-libre font-medium">
          LIVE & TRAVEL
        </h1>
        <h3 className="text-white text-[14px] lg:text-[20px] font-libre font-regulars">
          Special offers to suit your plan
        </h3>
      </div>
      <div className="flex">
        <img
          className=" brightness-75 lg:rounded-[24px] object-contain"
          src={hero_landingpage}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
