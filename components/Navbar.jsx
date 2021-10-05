import Link from "next/link";
import { useState } from "react";
import {
  FaSearch,
  FaCogs,
  FaSuitcase,
  FaClipboardList,
  FaChevronDown,
  FaCircle,
} from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="h-16 flex items-center flex-wrap  bg-navbar-gray">
        <Link href="/">
          <a className="inline-flex items-center">
            <img
              className="lg:ml-10 transform scale-40"
              src="/items/BrainLogo.png"
            ></img>
            <span className="text-white text-brain font-bold mr-6">
              Gente PreValente
            </span>
          </a>
        </Link>

        <div className="invisible lg:visible">
          <FaSearch className="text-white text-brain ml-sp114 mr-sp6 inline-flex" />
          <input
            className="bg-navbar-gray"
            type="text"
            placeholder="Buscar..."
          ></input>
        </div>

        <button
          className="inline-flex px-10 hover:bg-gray-700 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          } z-50 lg:ml-10 w-full lg:inline-flex lg:flex-grow lg:w-auto bg-navbar-gray`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto  w-full lg:items-center items-start  flex flex-col ">
            <Link href="/">
              <a className="flex lg:inline-flex lg:w-auto w-full text-brain px-7 py-2 rounded text-white items-center lg:justify-center hover:bg-gray-700">
                <FaCogs className="text-white mr-2" />
                <span className="text-white text-brain font-bold">
                  Administracion
                </span>
                <span className="ml-0 lg:inline-flex items-center justify-center px-1 py-0 text-xs text-red-100 transform -translate-y-1/2 bg-red-600 rounded-full">
                  2
                </span>
              </a>
            </Link>
            <Link href="/">
              <a className="space-x-2 flex lg:inline-flex lg:w-auto w-full px-7 py-2 rounded text-white items-center lg:justify-center hover:bg-gray-700">
                <FaSuitcase className="text-white mr-2" />
                <span className="text-white text-brain">Empleo</span>
                <FaChevronDown className="text-white mr-2" />
              </a>
            </Link>
            <Link href="/">
              <a className="space-x-2 flex lg:inline-flex lg:w-auto w-full px-7 py-2 rounded text-white items-center lg:justify-center hover:bg-gray-700">
                <FaClipboardList className="text-white mr-2" />
                <span className="text-white text-brain">Mi CV</span>
              </a>
            </Link>
            <Link href="/">
              <a className="space-x-2 flex lg:inline-flex lg:w-auto w-full px-7 py-2 rounded text-white items-center lg:justify-center hover:bg-gray-700">
                <FaCircle className="fill-current text-gray-400 mr-2 lg:text-2xl h-auto" />
                <span className="text-white font-roboto text-brain">
                  Daniel
                </span>

                <FaChevronDown className="text-white mr-4" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
