import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";
import { FaBarsStaggered, FaCartShopping, FaXmark } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { AuthContext } from "../contects/AuthProvider";
import "../index.css";

const NavBar = () => {
  const [isSticky, setSticky] = useState(false);

  const { user } = useContext(AuthContext);

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
    { link: "About", path: "/about" },
    { link: "Shop", path: "/shop" },
    { link: "DashBoard", path: "/admin/dashboard" },
  ];

  return (
    <header className=" bg-white w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300">
      <nav
        className={` py-4 lg:px-24 px-4 ${
          isSticky ? "sticky top-0 left-0 right-0 bg-primary text-white" : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link to="/" className=" text-2xl font-bold flex items-center gap-2">
            <FaMobileAlt className="inline-block" />
            <h1>
              <span className=" text-accent">M</span>OBILES
            </h1>
          </Link>
          <div className="flex justify-between">
            <ul className=" md:flex space-x-12 hidden">
              {navItems.map(({ link, path }) => (
                <Link
                  key={path}
                  to={path}
                  className="nav-link"
                >
                  {link}
                </Link>
              ))}
              <Link><FaCartShopping className="text-[26px]" /></Link>
              <Link><CgProfile className="text-[26px]" /></Link>
              
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
