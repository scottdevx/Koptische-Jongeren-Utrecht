import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { font_main, text_color_main, text_color_accent, bg_color_navbar } from "../pages/Layout";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
      className={`w-full h-16 flex sticky top-0 z-50 items-center justify-between ${bg_color_navbar} ${font_main}`}
    >
      <div className="flex-shrink-0 mr-auto pl-6">
        <img className="h-10 w-auto" src={logo} alt="" />
      </div>
      <ul
        className={`hidden lg:flex flex-grow justify-center space-x-4 gap-x-15 ${text_color_main} ${
          !isOpen ? "active" : ""
        }`}
      >
        <li>
          <Link
            to="/"
            className={`hover:font-bold ${
              location.pathname === "/" ? text_color_accent : ""
            }`}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="/vrijdagavond"
            className={`hover:font-bold flex items-center space-x-3  ${
              location.pathname === "/vrijdagavond" ? text_color_accent : ""
            }`}
          >
            <span>Vrijdagavond</span>
          </Link>
        </li>

        <li>
          <Link
            to="/activiteiten"
            className={`hover:font-bold flex items-center space-x-3  ${
              location.pathname === "/activiteiten" ? text_color_accent : ""
            }`}
          >
            <span>Activiteiten</span>
          </Link>
        </li>

        <li>
          <Link
            to="/liturgie"
            className={`hover:font-bold flex items-center space-x-3  ${
              location.pathname === "/liturgie" ? text_color_accent : ""
            }`}
          >
            <span>Liturgie</span>
          </Link>
        </li>

        <li>
          <Link
            to="/gallerij"
            className={`hover:font-bold flex items-center space-x-3  ${
              location.pathname === "/gallerij" ? text_color_accent : ""
            }`}
          >
            <span>Gallerij</span>
          </Link>
        </li>

        <li>
          <Link
            to="/about"
            className={`hover:font-bold ${
              location.pathname === "/about" ? text_color_accent : ""
            }`}
          >
            Over ons
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className={`hover:font-bold ${
              location.pathname === "/contact" ? text_color_accent : ""
            }`}
          >
            Contact
          </Link>
        </li>
        {/* <li>
          <div className="navbar-action">
            <a
              href="/resume.pdf"
              className="hover:font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </li> */}
      </ul>

      {/* The Hamburger */}
      <div
        className="lg:hidden ml-auto space-y-1 space-x-12 cursor-pointer"
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
        <div className="w-6 h-0.5 bg-white" />
      </div>

      {isOpen && (
        <ul
          ref={menuRef}
          className={`lg:hidden absolute top-16 left-0 w-full ${bg_color_navbar} flex flex-col items-center space-y-4 py-4 ${text_color_main}`}
        >
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/" ? text_color_accent : ""
              }`}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/vrijdagavond"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/vrijdagavond" ? text_color_accent : ""
              }`}
            >
              Vrijdagavond
            </Link>
          </li>

          <li>
            <Link
              to="/activiteiten"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/activiteiten" ? text_color_accent : ""
              }`}
            >
              Activiteiten
            </Link>
          </li>

          <li>
            <Link
              to="/liturgie"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/liturgie" ? text_color_accent : ""
              }`}
            >
              Liturgie
            </Link>
          </li>

          <li>
            <Link
              to="/gallerij"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/gallerij" ? text_color_accent : ""
              }`}
            >
              Gallerij
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/about" ? text_color_accent : ""
              }`}
            >
              Over ons
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`hover:font-bold ${
                location.pathname === "/contact" ? text_color_accent : ""
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
