import { mailbox } from "../assets";
import CustomButton from "./CustomButton";

const CTA = () => {
  return (
    <div className="flex justify-center lg:mb-[150px]">
      <div className="flex flex-row justify-between z-10 gap-y-5 absolute bg-[#CDEAE1] lg:absolute lg:w-[1232px] lg:h-[280px] lg:rounded-[24px] pt-10 lg:pt-[16px] lg:px-[32px] lg:drop-shadow-md">
        <div className="flex flex-col gap-5">
          <h2 className="font-libre font-semibold text-[40px] leading-[45px] w-20 ">
            Subscribe Newsletter
          </h2>
          <div>
            <h4 className="font-libre font-semibold text-[20px] ">
              The Travel
            </h4>
            <p className="font-montserrat font-medium text-[16px] ">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
          </div>
          <div className="flex flex-row gap-x-3">
            <input
              placeholder="Your email adress"
              type="text"
              className="w-[473px] h-[56px] rounded-[4px] font-montserrat p-5"
            />
            <CustomButton
              style={
                "bg-[#112211] text-white font-montserrat font-medium text-[14px] h-[56px] w-[104px] rounded-[4px]"
              }
            >
              {"Subscribe"}
            </CustomButton>
          </div>
        </div>
        <img src={mailbox} alt="" />
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
