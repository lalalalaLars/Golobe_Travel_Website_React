import { reviewCards } from "../constants";
import { CustomButton } from "../components";
import Rating from "@mui/material/Rating";

const Reviews = () => {
  return (
    <section className="flex flex-col mx-5 lg:w-[1232px] mt-20 lg:mt-40 gap-10 ">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-montserrat font-semibold text-[32px] text-black ">
            Reviews
          </h1>
          <p className="font-montserrat font-regular text-[16px] text-black ">
            What people says about Golobe facilities
          </p>
        </div>
        <CustomButton
          style={
            " hidden lg:flex justify-center items-center font-montserrat font-medium text-[14px] w-[80px] h-[40px] border-[1px] border-[#8DD3BB] rounded-[4px] "
          }
        >
          {"See All"}
        </CustomButton>
      </div>
      <div className="flex flex-col lg:flex-row gap-y-10 gap-x-8 mb-40 ">
        {reviewCards.map((card) => (
          <div
            className="flex flex-col lg:mx-0 p-5 gap-2 lg:w-[390px] lg:h-[500px] bg-white rounded-[20px] drop-shadow-xl"
            key={card.id}
          >
            <div className="flex flex-col gap-5">
              <h2 className="font-libre font-semibold text-[24px] text-[#112211]">
                {`"${card.title}"`}
              </h2>
              <p className="font-montserrat font-medium text-[14px] text-[#112211] opacity-50 ">
                {card.comment}
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Rating name="read-only" value={card.rating} readOnly />
              <h4> {card.username} </h4>
            </div>
            <div>
              <img src={card.image} alt="review image" />
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <CustomButton
            style={
              " lg:hidden flex items-center justify-center w-[80px] h-[40px] border-[1px] border-[#8DD3BB] rounded-[4px] font-montserrat font-medium text-[14px] "
            }
          >
            {"See All"}
          </CustomButton>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
