import { Outlet, Link } from "react-router-dom";
import Headear from "../components/Header";
import Footer from "../components/Footer";


export default function MainLayout() {
  return (
    <>
      <Headear></Headear>
      <main style={{ padding: "20px" }}>
        <Outlet /> {/* Aqui entra o conteúdo da rota */}
      </main>
      <Footer></Footer>
    </>
  );
}