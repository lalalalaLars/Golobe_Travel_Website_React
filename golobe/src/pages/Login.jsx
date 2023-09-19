import { Link } from "react-router-dom";
import { black_logo, hotel_login } from "../assets";
import { LoginForm } from "../components";

const Login = () => {
  return (
    <div className="flex flex-row items-center justify-center lg:w-full overflow-hidden pt-10">
      <div className="flex flex-col items-center lg:items-start">
        <div className="flex justify-between items-center lg:w-[1232px]">
          <div className="flex flex-col items-center lg:items-start">
            <Link to="/">
              <img
                className="w-[100px] lg:w-[140px]"
                src={black_logo}
                alt="Golobe logo"
              />
            </Link>
            <LoginForm />
          </div>
          <div className="hidden lg:flex">
            <img className="w-[500px] " src={hotel_login} alt="Hotel" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
