import BgHeader from "@/components/BgHeader";
import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";

export default function AppLayout() {
  return (
    <>
      <BgHeader />
      {/* Dinamyc area of routes */}
      <Outlet />
      <Footer />
    </>
  );
}
