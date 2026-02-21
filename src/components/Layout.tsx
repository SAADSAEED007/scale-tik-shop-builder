import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import CursorFollower from "./CursorFollower";
import SprinkleTrail from "./SprinkleTrail";

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <SprinkleTrail />
    <CursorFollower />
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
