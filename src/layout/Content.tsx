import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";
// import SplashCursor from "../components/code";

function Content () {
  return (
    <div className="w-full bg-black transition-all duration-500 ease-in-out p-4">
      <NavBar />
      <div className="min-h-screen max-w-3xl mx-auto md:mt-[75px] mt-20">
        <Outlet />
        {/* <SplashCursor /> */}
      </div>
    </div>
  );
}

export default Content;