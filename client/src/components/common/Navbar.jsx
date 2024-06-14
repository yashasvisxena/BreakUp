import logo from "../images/logo.png";
import DarkLight from "./DarkLight";
import { ThemeProvider } from "../../contexts/theme";
import { useEffect, useState } from "react";
function Navbar() {
  const [themeMode, setThemeMode] = useState("dark");

  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="w-full flex justify-between items-center px-4 py-4 relative bg-background top-0">
        <div className="flex items-center justify-center">
          <img src={logo} alt="logo" className="w-10 h-10 sm:w-14 sm:h-14 mr-3" />
          <h2 className="text-center scroll-m-20 border-b text-xl sm:text-4xl font-semibold tracking-tight ">
            BreakUp
            <span className="text-red-500">.</span>
            <span className="text-green-500">.</span>
            <span className="text-blue-500">.</span>
          </h2>
            <h3 className="text-center scroll-m-20 hidden sm:text-lg font-semibold tracking-tight">
              Split Bills not FriendShip
            </h3>
            
        </div>
        <div className="flex items-center justify-center">
          <DarkLight />
          <button className="bg-red-500 text-white text-sm sm:text-base px-2 py-1 rounded text-center">
            Login
          </button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
