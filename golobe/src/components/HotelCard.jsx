/* eslint-disable react/prop-types */
import { Divider } from "@mui/material";
import CustomButton from "./CustomButton";

const HotelCard = ({ hotel }) => {
  return (
    <>
      <div className="flex h-[298px] rounded-[12px] bg-white shadow-lg ">
        <div className="flex flex-row">
          <div className="flex">
            <img
              className="object-cover rounded-l-[12px]"
              src={hotel.image}
              alt={hotel.image}
            />
          </div>
          <div className="flex flex-col justify-between p-5 w-full">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <h2 className="font-libre font-bold text-[20px] ">
                  {hotel.name}
                </h2>
                <h2 className="font-libre font-bold text-[20px] ">
                  {hotel.city}
                </h2>
              </div>
              <div className="flex flex-col">
                <p className="font-montserrat font-medium text-[12px] opacity-75 ">
                  starting from
                </p>
                <h2 className="flex items-baseline font-montserrat font-bold text-salmon text-[24px] ">
                  ${hotel.price}/
                  <p className="font-montserrat font-bold text-[14px] ">
                    night
                  </p>
                </h2>
                <p className="font-montserrat font-medium text-[12px] opacity-75 ">
                  excl. tax
                </p>
              </div>
            </div>
            <p>Geolocation data</p>
            <div className="flex flex-row gap-x-10">
              <p>Hotel stars</p>
              <p>Amnities</p>
            </div>
            <p>rating</p>
            <Divider />
            <div className="flex flex-row gap-x-5">
              <CustomButton
                style={"w-[48px] h-[48px] border-2 border-mint rounded-[4px] "}
              >
                <img src="" alt="Heart" />
              </CustomButton>
              <CustomButton
                style={
                  "w-[428px] h-[48px] bg-mint rounded-[4px] font-montserrat font-semibold text-[14px] "
                }
              >
                {"View Place"}
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelCard;
