import { popularCities } from "../constants";

import { CustomButton } from "../components";

const CityCards = () => {
  return (
    <div className="flex flex-wrap mt-10 gap-y-8 lg:justify-between justify-center">
      {popularCities.map((card) => (
        <div
          className="flex items-center px-5 gap-x-5 w-[390px] h-[122px] rounded-[16px] bg-white drop-shadow-md cursor-pointer "
          key={card.id}
        >
          <img
            className="w-[90px] h-[90px] rounded-[8px] object-contain "
            src={card.image}
            alt="city image"
          />
          <div className="flex flex-col gap-1">
            <h3 className="font-montserrat font-semibold text-[#112211] text-[16px] opacity-70 ">
              {card.city}, {card.country}
            </h3>
            <p className="font-montserrat font-medium text-[#112211] text-[14px] ">
              Flights &#x2022; Hotels &#x2022; Resorts
            </p>
          </div>
        </div>
      ))}
      <CustomButton
        style={
          "flex lg:hidden items-center justify-center w-[149px] h-[40px] border-[1px] border-[#8DD3BB] rounded-[4px] text-[14px] font-montserrat font-medium "
        }
      >
        {"See more places"}
      </CustomButton>
    </div>
  );
};

export default CityCards;
