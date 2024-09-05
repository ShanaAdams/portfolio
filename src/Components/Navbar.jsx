// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">About</Link>
//         </li>
//         <li>
//           <Link to="/resume">Resume</Link>
//         </li>
//         <li>
//           <Link to="/works">Works</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-20 border-b ">
      <div className="w-full p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white"></div>
        <ul className="flex flex-row space-x-8 pr-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "font-bold text-shadow-glow" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "font-bold text-shadow-glow" : ""
                }`
              }
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/works"
              className={({ isActive }) =>
                `text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "font-bold text-shadow-glow" : ""
                }`
              }
            >
              Works
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "font-bold text-shadow-glow" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
