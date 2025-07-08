import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const menuBtn = document.getElementById("menu-btn");
    const menu = document.getElementById("menu");

    const toggleMenu = () => {
      if (menu) menu.classList.toggle("hidden");
    };

    if (menuBtn) menuBtn.addEventListener("click", toggleMenu);
    return () => {
      if (menuBtn) menuBtn.removeEventListener("click", toggleMenu);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-md">
      <div className="px-5 md:px-20 py-4 flex justify-between items-center">
        <h1 className="font-extrabold text-3xl cursor-pointer text-blue-950">
          Learn<span className="text-orange-500">Soft</span>
          <span className="text-xs font-light">solutions</span>
        </h1>

        <nav
          className=" hidden md:flex absolute top-16 left-0 w-full bg-blue-950 md:bg-transparent md:static md:space-x-6 md:items-center md:w-auto py-3 px-3 space-x-4"
          id="menu"
        >
          <a
            href="#"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            Home
          </a>
          <a
            href="#Overview"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            Overview
          </a>
          <a
            href="#Aboutus"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            About Us
          </a>
          <a
            href="#"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            Products
          </a>
          <a
            href="#services"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            Services
          </a>
          <a
            href="#contact"
            className="md:text-gray-900 text-white hover:text-orange-600"
          >
            Contact Us
          </a>
          <a
            href="#"
            className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md text-sm font-medium"
          >
            Access Demo
          </a>
        </nav>

        <div className="md:hidden">
          <button
            className="border border-orange-600 rounded-full py-1 px-4 hover:bg-orange-600 hover:text-white"
            id="menu-btn"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
