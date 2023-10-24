import { hotel_hero } from "../assets";
import styles from "../styles";

const Hero = () => {
  return (
    <section className="flex flex-col items-center">
      <div
        className={`flex flex-col items-left  absolute z-10 pt-40 ${styles.boxWidth}`}
      >
        <h2 className=" text-white text-[20px] lg:text-[45px] font-libre font-medium ">
          Make your travel <br /> whishlist, we’ll do <br /> the rest
        </h2>
        <h3 className="text-white text-[14px] lg:text-[20px] font-libre font-regulars">
          Special offers to suit your plan
        </h3>
      </div>
      <div className="w-full h-[735px]">
        <img
          className="w-full brightness-75  object-cover"
          src={hotel_hero}
          alt="Hero image"
        />
      </div>
    </section>
  );
};

export default Hero;
