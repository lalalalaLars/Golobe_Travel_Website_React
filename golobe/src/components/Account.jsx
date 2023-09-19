import { add_icon, edit_icon } from "../assets";
import { CustomButton } from "../components";

import { useSelector } from "react-redux";

const Account = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <>
      <section className="flex flex-col gap-y-3 mb-60">
        <h2 className="font-libre font-bold text-[32px] ">Account</h2>
        {currentUser.paymentMethod ? (
          <div className="flex flex-col p-5 rounded-[12px] gap-y-8 shadow-lg">
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Name
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {currentUser.name}
                </h3>
              </div>
              <CustomButton
                style={
                  "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                }
              >
                <img src={edit_icon} alt="edit icon" />
                Change
              </CustomButton>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Email
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {" "}
                  {currentUser.email}{" "}
                </h3>
              </div>
              <div className="flex gap-x-10">
                <CustomButton
                  style={
                    "flex gap-x-1 items-center justify-center w-[185px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                  }
                >
                  <img src={add_icon} alt="add icon" />
                  Add another email
                </CustomButton>
                <CustomButton
                  style={
                    "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                  }
                >
                  <img src={edit_icon} alt="edit icon" />
                  Change
                </CustomButton>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center ">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Password
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {" "}
                  {currentUser.password}{" "}
                </h3>
              </div>
              <CustomButton
                style={
                  "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                }
              >
                <img src={edit_icon} alt="edit icon" />
                Change
              </CustomButton>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Phone number
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {" "}
                  {currentUser.phoneNumber}{" "}
                </h3>
              </div>
              <CustomButton
                style={
                  "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                }
              >
                <img src={edit_icon} alt="edit icon" />
                Change
              </CustomButton>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Address
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {" "}
                  {currentUser.address}{" "}
                </h3>
              </div>
              <CustomButton
                style={
                  "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                }
              >
                <img src={edit_icon} alt="edit icon" />
                Change
              </CustomButton>
            </div>
            <div className="flex lg:flex-row flex-col justify-between items-center">
              <div>
                <p className="font-montserrat text-[16px] black-green opacity-75 ">
                  Date of birth
                </p>
                <h3 className="font-montserrat font-semibold text-[16px] black-green ">
                  {" "}
                  {currentUser.dateOfBirth}{" "}
                </h3>
              </div>
              <CustomButton
                style={
                  "flex items-center justify-center w-[140px] h-[48px] border-[#8DD3BB] border-2 rounded-[4px] font-montserrat font-medium text-[14px] "
                }
              >
                <img src={edit_icon} alt="edit icon" />
                Change
              </CustomButton>
            </div>
          </div>
        ) : (
          <p> Please Log in</p>
        )}
      </section>
    </>
  );
};

export default Account;
