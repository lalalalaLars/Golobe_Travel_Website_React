/* eslint-disable react/prop-types */
import styles from "../styles.js";
import {
  HotelCardList,
  HotelFilter,
  HotelSearchForm,
  SignedInNavbar,
} from "../components";

const HotelListing = ({ priceRange, setPriceRange }) => {
  return (
    <>
      <SignedInNavbar />
      <div className={`flex flex-col ${styles.flexCenter}`}>
        <HotelSearchForm />
        <div
          className={`flex flex-row justify-between  mt-10 ${styles.boxWidth}`}
        >
          <HotelFilter priceRange={priceRange} setPriceRange={setPriceRange} />
          <HotelCardList />
        </div>
      </div>
    </>
  );
};

export default HotelListing;
