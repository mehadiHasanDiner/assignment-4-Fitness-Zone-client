const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          Logo
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {/* mapping navlinks and showing */}
            {/* {navLinks.map((navlink, index) => (
              <li key={index}>
                <a className="px-4">
                  <NavLink to={navlink.path}>{navlink.name}</NavLink>
                </a>
              </li>
            ))} */}
            menu
          </ul>
        </div>
        <div className="flex justify-center items-center navbar-center">
          <img className="size-7" src="/favicon.png" alt="" />
          <a className="text-xl font-bold ml-2">
            Fitness <span className="text-primary">Z</span>one
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex navbar-end">
        <ul className="menu menu-horizontal px-1">
          {/* mapping navlinks and showing */}
          {/* {navLinks.map((navlink, index) => (
            <li key={index}>
              <a className="px-4">
                <NavLink to={navlink.path}>{navlink.name}</NavLink>
              </a>
            </li>
          ))} */}
          menu2
        </ul>
      </div>
    </div>
  );
};

export default Header;
