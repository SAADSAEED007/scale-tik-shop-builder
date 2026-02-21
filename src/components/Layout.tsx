import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import dotsBg from "@/assets/dots.jpg";

const Layout = () => (
  <div className="flex flex-col min-h-screen relative">
    {/* Global Dotted Background */}
    <div
      className="fixed inset-0 z-0 pointer-events-none opacity-[0.22] mix-blend-multiply"
      style={{
        backgroundImage: `url(${dotsBg})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '120px',
      }}
    />

    <div className="relative z-10 flex flex-col min-h-screen">
      <CursorFollower />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
);

export default Layout;
