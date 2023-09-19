import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";

import {
  FlightFlow,
  HotelListing,
  HotelSearch,
  LandingPage,
  Login,
} from "./pages";
import {
  logo,
  airplane,
  bed,
  footer_logo,
  facebook_icon,
  x_icon,
  youtube_icon,
  instagram_icon,
} from "./assets";
import UserProfile from "./pages/UserProfile";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/findflight" element={<FlightFlow />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/hotelsearch" element={<HotelSearch />} />
        <Route path="/hotellisting" element={<HotelListing />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  return (
    <>
      {isLandingPage && (
        <nav className="hidden lg:flex absolute w-full mt-20 z-10 items-center justify-around">
          <div className="flex flex-row gap-x-8 items-center font-montserrat">
            <div className="flex items-center gap-x-1 ">
              <img src={airplane} alt="airplane icon" />
              <Link className="text-white" to="/findflight">
                Find Flight
              </Link>
            </div>
            <div className="flex items-center gap-x-1">
              <img src={bed} alt="bed icon" />
              <Link className="text-white" to="/findstay">
                Find Stay
              </Link>
            </div>
          </div>

          <img className="pr-20" src={logo} alt="Global logo" />

          <div className="flex items-center gap-x-10 font-montserrat">
            <Link to="/login" className="text-white">
              Sign in
            </Link>
            <Link className="text-white">Sign up</Link>
          </div>
        </nav>
      )}

      <div className="bg-[#FAFBFC]">
        <Outlet />
      </div>

      {!isLoginPage && (
        <footer className="hidden relative h-[422px] bg-[#8DD3BB] w-full items-end justify-around pb-40">
          <div className="flex flex-col  lg:w-[1232px]">
            <div>
              <img src={footer_logo} alt="Golobe logo" />
            </div>
            <div className="flex flex-row gap-x-3 mt-5">
              <img src={facebook_icon} alt="facebook" />
              <img src={x_icon} alt="X" />
              <img src={youtube_icon} alt="youtube" />
              <img src={instagram_icon} alt="instagram" />
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default App;
