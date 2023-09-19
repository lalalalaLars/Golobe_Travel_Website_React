/* eslint-disable react/prop-types */

import { CollapseCard } from "../components";

import PriceSlider from "../components/PriceSlider"; // Import the PriceSlider component

const HotelFilter = ({ localPriceRange, handlePriceRangeChange }) => {
  return (
    <div>
      <CollapseCard
        content={
          <PriceSlider
            value={localPriceRange}
            onChange={handlePriceRangeChange}
          />
        }
      />
    </div>
  );
};

export default HotelFilter;
