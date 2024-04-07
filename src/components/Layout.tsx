import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};

function Layout({ isLoggedIn, setIsLoggedIn, toggleTheme }: LayoutProps) {
  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        toggleTheme={toggleTheme}
      />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
