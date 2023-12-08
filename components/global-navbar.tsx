// import { GlobalNavBarRoutes } from "@/components/global-navbar-routes";
// import MobileSidebar from "./mobile-sidebar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GlobalNavBarRoutes } from "./global-navbar-routes";

const GlobalNavbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">      
      <GlobalNavBarRoutes />
    </div>
  );
};

export default GlobalNavbar;
