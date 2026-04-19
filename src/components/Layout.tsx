import { Suspense } from "react";
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
      <Suspense fallback={
        <div className="w-full flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        </div>
      }>
        <Outlet />
      </Suspense>
    </main>
    <Footer />
  </div>
);

export default Layout;
