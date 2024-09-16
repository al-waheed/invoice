import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import Logo from "../assets/Logo.png";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    link: "Activity",
    path: "/activity",
    icon: Clock4Icon,
  },
  {
    link: "Analytics",
    path: "/analytics",
    icon: BarChart3Icon,
  },
  {
    link: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRightIcon,
  },
  {
    link: "Support",
    path: "/support",
    icon: HelpCircleIcon,
  },
];

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (windowWidth < 768) {
        setIsExpanded(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  },);

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-2 duration-500")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] md:flex hidden justify-center items-center"
      >
        <img src={RightArrowIcon} className="w-2" />
      </div>

      <div className="logo-div flex space-x-4 items-center">
        <img src={Logo} className="md:w-6 w-4 ml-2" />
        <span className={!isExpanded ? "hidden" : "block"}>Money Tracker</span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        {navLinks.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              "nav-links w-full flex space-x-3 p-2 rounded " +
              (isActive ? "bg-[#FF8C8C] text-white" : " text-black") +
              (!isExpanded ? " pl-3" : "")
            }
          >
            <item.icon className="md:w-6 w-4" />
            <span className={!isExpanded ? "hidden" : "block"}>
              {item.link}
            </span>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
}

export default Navbar;
