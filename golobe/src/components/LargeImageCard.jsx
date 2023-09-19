import { largeImageCards } from "../constants";
import CustomButton from "./CustomButton";

const LargeImageCard = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5 mt-20">
      {largeImageCards.map((card) => (
        <div className="flex items-end justify-center" key={card.id}>
          <img src={card.cardBackground} alt="card image" />
          <div className="flex flex-col gap-y-1 absolute items-center justify-center px-5 lg:w-[400px] text-center pb-8">
            <h2 className="font-libre font-medium text-[40px] text-white">
              {card.title}
            </h2>
            <p className="font-montserrat font-regular text-white text-[16px] pb-3 ">
              {card.subtitle}
            </p>
            <CustomButton
              style={
                " flex gap-x-1 items-center justify-center rounded-[4px] bg-[#8DD3BB] w-[144px] h-[48px]"
              }
            >
              <img src={card.buttonIcon} alt="paper plane icon" />
              {card.buttonChild}
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LargeImageCard;
