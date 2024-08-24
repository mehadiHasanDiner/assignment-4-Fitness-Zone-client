import { Outlet } from "react-router-dom";
import Footer from "../ui/Footer";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
