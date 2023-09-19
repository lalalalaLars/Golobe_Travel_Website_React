import { SignedInNavbar, HeroHotel, HotelSearchForm } from "../components";
import styles from "../styles";

const HotelSearch = () => {
  return (
    <div className="w-full overflow-hidden lg:pt-5">
      <SignedInNavbar />
      <div className={`flex flex-col ${styles.flexCenter}`}>
        <div className="flex">
          <HeroHotel />
        </div>
        <div className="flex">
          <HotelSearchForm />
        </div>
      </div>
    </div>
  );
};

export default HotelSearch;
