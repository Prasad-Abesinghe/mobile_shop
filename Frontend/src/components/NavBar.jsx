import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from "../contects/AuthProvider";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

  //toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  //navItems
  const navItems = [
    { link: "Home", path: "/" },
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Phone", path: "/admin/dashboard" },
    { link: "Services", path: "/services" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className=" w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className=" text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="inline-block" /> MOBILES
          </Link>
          <ul className=" md:flex space-x-12 hidden">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-black uppercase cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className=" space-x-12 hidden lg:flex items-center">
            <button>
              <FaBarsStaggered className=" w-5" />
            </button>
            
          </div>
          {/* menu btn for mobiles*/}
          <div className=" md:hidden">
            <button
              onClick={toggleMenu}
              className=" text-black focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className=" h-5 w-5 text-black" />
              ) : (
                <FaBarsStaggered className=" h-5 w-5 text-black" />
              )}
            </button>
          </div>
        </div>
        {/* nav items for sm devices */}
        <div
          className={`space-y-4 px-4 mt-12 py-7 bg-blue-400 text-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base uppercase cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;