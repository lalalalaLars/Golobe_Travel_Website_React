import { CustomButton, LargeImageCard } from "../components";
import CityCards from "./CityCards";

const PlanPerfectTrip = () => {
  return (
    <section className="flex flex-col mt-20 lg:mt-[980px] lg:w-[1232px]">
      <div className="flex flex-col gap-y-5 lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-y-2 lg:justify-between">
          <h2 className="font-montserrat font-semibold text-[25px] lg:text-[32px] text-black ">
            Plan your perfect trip
          </h2>
          <p className="font-montserrat font-regular text-[16px] ">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <CustomButton
          style={
            "hidden lg:flex items-center justify-center w-[149px] h-[40px] border-[1px] border-[#8DD3BB] rounded-[4px] text-[14px] font-montserrat font-medium "
          }
        >
          {"See more places"}
        </CustomButton>
      </div>

      <CityCards />

      <LargeImageCard />
    </section>
  );
};

export default PlanPerfectTrip;
