import CustomButton from "./CustomButton";
import { apple_icon, facebook_color, google_color } from "../assets";
import { setCurrentUser } from "../features/userSlice";

import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const LoginForm = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );
    if (foundUser) {
      dispatch(setCurrentUser(foundUser));
      navigate("/profile");
    } else {
      console.log("invalid");
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col gap-y-8 pt-8 lg:pt-0">
      <div className="flex flex-col gap-y-2">
        <h1 className="font-libre font-semibold text-[25px] lg:text-[30px] ">
          Login
        </h1>
        <p className="font-montserrat text-[16px] text-[#112211] opacity-75 ">
          Login to access your Golobe account
        </p>
      </div>
      <div className="flex flex-col lg:w-[500px] gap-y-5 ">
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          label="Email"
          id="fullwidht"
        />
        <FormControl className="lg:w-[500px]" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <div className="flex items-center justify-between">
          <FormControlLabel
            className="text-[#112211]"
            control={<Checkbox />}
            label="Remember me"
          />

          <Link
            to=""
            className="font-montserrat font-medium text-[14px] text-[#FF8682] "
          >
            Forgot Password
          </Link>
        </div>
        <div className="flex flex-col items-center gap-y-5">
          <CustomButton
            onClick={handleLogin}
            style={
              "flex justify-center items-center w-80 lg:w-[500px] h-[48px] mt-2 rounded-[4px] font-montserrat font-medium text-[14px] bg-[#8DD3BB] "
            }
          >
            {"Login"}
          </CustomButton>
          <p className="font-montserrat font-semibold text-[14px]">
            Don't have an account?{" "}
            <Link to="" className="text-[#FF8682]">
              Sign up
            </Link>{" "}
          </p>
        </div>
        <div className="pt-5">
          <Divider>Or login with</Divider>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-y-3 lg:justify-between pt-5">
          <CustomButton className="flex items-center justify-center w-[160px] h-[56px] border-2 border-[#8DD3BB] rounded-[4px] ">
            <img src={facebook_color} alt="facebook icon" />
          </CustomButton>
          <CustomButton className="flex items-center justify-center w-[160px] h-[56px] border-2 border-[#8DD3BB] rounded-[4px] ">
            <img src={google_color} alt="google icon" />
          </CustomButton>
          <CustomButton className="flex items-center justify-center w-[160px] h-[56px] border-2 border-[#8DD3BB] rounded-[4px] ">
            <img src={apple_icon} alt="apple icon" />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
