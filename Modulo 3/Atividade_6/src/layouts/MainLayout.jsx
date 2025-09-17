import { Outlet } from "react-router-dom";
import { useEffect, useContext } from "react";
import Header from "../components/Header";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MainLayout() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme.toLowerCase());
  }, [theme]);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}