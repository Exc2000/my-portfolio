import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "@/components/Home";
import "./App.css";
import { useTheme } from "./components/context/useTheme";


const App = () => {
  const { theme } = useTheme(); // 'light', 'dark', or 'system'

  useEffect(() => {
    const metaThemeColor = document.querySelector("meta[name=theme-color]");

    const getSystemTheme = () => {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
      return "light";
    };

    const resolvedTheme = theme === "system" ? getSystemTheme() : theme;

    const themeColors = {
      dark: "#000000", // Black or your app's background
      light: "#ffffff", // White or your app's background
    };

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", themeColors[resolvedTheme]);
    }
  }, [theme]);
  return (
    <Routes>
      {/* Public Routes*/}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
};

export default App;
