import { Divider } from "@mui/material";
import { airplane_black, bed_black, black_heart, black_logo } from "../assets";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const SignedInNavbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <nav className="lg:flex hidden items-center lg:w-full py-5 drop-shadow-lg  justify-center fixed z-10 bg-white">
      <div className="flex lg:w-[1232px] justify-between">
        <div className="flex flex-row items-center gap-x-8">
          <div className="flex gap-x-1">
            <img className="w-5" src={airplane_black} alt="airplane icon" />
            <Link
              className="font-montserrat font-medium text-[14px] "
              to="/findflight"
            >
              Find Flights
            </Link>
          </div>
          <div className="flex gap-x-1">
            <img className="w-5" src={bed_black} alt="bed icon" />
            <Link
              className="font-montserrat font-medium text-[14px] "
              to="/findstay"
            >
              Find Stays
            </Link>
          </div>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <Link to="/">
            <img src={black_logo} alt="Golobe logo" />
          </Link>
        </div>
        {currentUser ? (
          <>
            <div className="flex gap-x-5 items-center">
              <div className="flex gap-x-1">
                <img className="w-5" src={black_heart} alt="heart icon" />
                <Link
                  className="font-montserrat font-medium text-[14px] "
                  to="#"
                >
                  Favorites
                </Link>
              </div>
              <Divider
                sx={{ border: 1, height: 12, marginTop: 1.4 }}
                orientation="vertical"
                flexItem
              />
              <div className="flex items-center gap-x-1">
                <img
                  className="w-[30px] h-[30px] rounded-[100px] object-cover "
                  src={currentUser.profilePicture}
                  alt="profile pic"
                />
                <Link
                  className="font-montserrat font-medium text-[14px] "
                  to="#"
                >
                  {" "}
                  {currentUser.name}{" "}
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="flex gap-x-3">
            <Link to="/login">
              <CustomButton style={"w-[104px] h-[48px] "}>
                {"Login"}
              </CustomButton>
            </Link>
            <CustomButton
              style={
                " w-[104px] h-[48px] text-white bg-[#112211] rounded-[8px] "
              }
            >
              {"Sign up"}
            </CustomButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default SignedInNavbar;
