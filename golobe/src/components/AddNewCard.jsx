import { mint_plus } from "../assets";

const AddNewCard = () => {
  return (
    <>
      <div className="flex justify-center items-center border-dashed border-[3px] border-mint w-[378px] h-[212px] rounded-[12px] ">
        <div className="flex flex-col items-center justify-center gap-y-3">
          <div className="flex items-center justify-center border-[3px] border-mint rounded-[100px] w-[60px] h-[60px]">
            <img className="w-7" src={mint_plus} alt={mint_plus} />
          </div>
          <p className="font-montserrat font-medium text-[14px] black-green opacity-75 ">
            Add a new card
          </p>
        </div>
      </div>
    </>
  );
};

export default AddNewCard;
