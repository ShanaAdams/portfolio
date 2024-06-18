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
    <nav className="bg-white dark:bg-gray-900 fixed top-0 w-full z-20 border-b border-gray-200 dark:border-gray-600">
      <div className="w-full p-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-gray-900 dark:text-white">
          Shana Adams
        </div>
        <ul className="flex flex-row space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500 ${
                  isActive ? "font-bold" : ""
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
                  isActive ? "font-bold" : ""
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
                  isActive ? "font-bold" : ""
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
                  isActive ? "font-bold" : ""
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
