import { hero_landingpage } from "../assets";

const Hero = () => {
  return (
    <div>
      <div
        className="relative rounded-[24px] mt-10 "
        style={{
          width: 1440,
          height: 650,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: `url(${hero_landingpage})`,
          filter: "brightness(0.7)",
        }}
      ></div>
    </div>
  );
};

export default Hero;
