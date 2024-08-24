import { Link, NavLink } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import { useState } from "react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "Management",
    path: "/products/management",
  },
  {
    name: "Cart",
    path: "/products/cart",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const active = {
    color: "yellow",
    fontWeight: "bold",
  };

  const inactive = {
    color: "white",
  };

  return (
    <header className="bg-gradient-to-t from-blue-700 to-blue-400 text-white p-2 rounded-b-md shadow-xl">
      <div className=" flex justify-between">
        <nav className={isMenuOpen ? "" : "flex justify-between w-full"}>
          <div className="flex justify-between ">
            <div className="">
              <Link to={"/"}>
                <div className={"flex items-center"}>
                  <img className="pr-2" width={45} src={logo} alt="" />
                  <p className="text-2xl font-bold">GYM Shop</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="pt-2 ">
            <ul
              className={
                isMenuOpen
                  ? "flex flex-col space-y-3 pt-4 pl-2"
                  : "hidden md:flex space-x-5"
              }
            >
              {navLinks.map((navItem, index) => (
                <li
                  onClick={handleMenuToggle}
                  className=" hover:text-yellow-400"
                  key={index}
                >
                  <NavLink
                    style={({ isActive }: { isActive: boolean }) =>
                      isActive ? active : inactive
                    }
                    to={navItem.path}
                  >
                    {navItem.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* mobile menubar button */}
        <div className={isMenuOpen ? "" : "md:hidden"}>
          <button onClick={handleMenuToggle}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
