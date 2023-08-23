import { Divider } from "@mui/material";

// eslint-disable-next-line react/prop-types
const ProfileTabs = ({ activeTab, onTabChange }) => {
  return (
    <>
      <div className="bg-white shadow-md p-5 mb-10 rounded-[12px]">
        <div className="flex justify-between lg:text-[16px] text-[14px] ">
          <div className="flex justify-start w-[100%]">
            <button
              className={`py-2 px-4 ${
                activeTab === 1
                  ? "border-b-[3px] border-[#8DD3BB]"
                  : "border-none"
              }`}
              onClick={() => onTabChange(1)}
            >
              Account
            </button>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="flex justify-start w-[100%]">
            <button
              className={`py-2 px-4 ${
                activeTab === 2
                  ? "border-b-[3px] border-[#8DD3BB]"
                  : "border-none"
              }`}
              onClick={() => onTabChange(2)}
            >
              History
            </button>
          </div>
          <Divider orientation="vertical" flexItem />
          <div className="flex justify-start w-[100%]">
            <button
              className={`py-2 px-4 ${
                activeTab === 3
                  ? "border-b-[3px] border-[#8DD3BB]"
                  : "border-none"
              }`}
              onClick={() => onTabChange(3)}
            >
              Payment methods
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileTabs;
