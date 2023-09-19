import { HotelCard } from "../components";
import { useSelector } from "react-redux";

const HotelCardList = () => {
  const filteredHotels = useSelector((state) => state.hotels.filteredHotels);
  console.log("Filtered Hotels:", filteredHotels);

  return (
    <>
      <div className="flex flex-col gap-y-10">
        {filteredHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </>
  );
};

export default HotelCardList;
