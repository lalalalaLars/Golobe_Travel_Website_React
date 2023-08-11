import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { FlightFlow, HotelFlow, LandingPage } from "./pages";
import { logo, airplane, bed } from "./assets";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<LandingPage />} />
        <Route path="/findflight" element={<FlightFlow />} />
        <Route path="/findstay" element={<HotelFlow />} />
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
  return (
    <>
      <nav className="flex gap- absolute w-full mt-20 z-10 items-center justify-around">
        <div className="flex flex-row gap-x-8 items-center">
          <div className="flex items-center gap-x-1">
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

        <div className="flex items-center gap-x-10">
          <Link className="text-white">Sign in</Link>
          <Link className="text-white">Sign up</Link>
        </div>
      </nav>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
