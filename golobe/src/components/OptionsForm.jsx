import {
  ClassSelect,
  DatePicker,
  FromToSelect,
  PassengerSelect,
  TripSelect,
} from "../components";

const OptionsForm = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row gap-y-5 lg:gap-x-5">
      <FromToSelect />
      <TripSelect />
      <DatePicker />
      <div className="border-[1px] border-[#112211] opacity-20 lg:border-none" />
      <div className="flex flex-col lg:flex-row justify-center gap-5 lg:ml-10 ">
        <PassengerSelect />
        <ClassSelect />
      </div>
    </div>
  );
};

export default OptionsForm;
