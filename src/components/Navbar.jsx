// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { name: "Services", id: "services" },
  { name: "About", id: "about" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl md-text-2xl text-pink-500">GlowSpace</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center font-medium text-sm">
        <Link
            to="/"
            className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all">
            Home
          </Link>
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer text-gray-700 hover:text-pink-600 transition-all"
              activeClass="text-pink-600 font-semibold"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Link
            to="/booking"
            className={`px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-all ${
              location.pathname === "/booking" ? "underline" : ""
            }`}
          >
            Book
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-pink-600 text-2xl" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 pb-4 space-y-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={closeMenu}
              className="block text-gray-700 hover:text-pink-600"
            >
              {item.name}
            </ScrollLink>
          ))}
          <Link
            to="/booking"
            onClick={closeMenu}
            className="block text-white bg-pink-500 text-center py-2 rounded-full hover:bg-pink-600"
          >
            Book
          </Link>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;