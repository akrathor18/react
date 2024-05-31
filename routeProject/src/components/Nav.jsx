import React from "react";
import "./nav.css";
import {Link, NavLink} from 'react-router-dom'
function Nav() {
  const switchTheme = (e) => {
    const status = e.currentTarget.checked;
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(status ? "dark" : "light");
  };

  return (
    <nav className="relative w-full dark:bg-black bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <NavLink 
       className={({ isActive }) => isActive ? "text-green-500" : "text-black dark:text-white"}
        to="/">
          <div className="inline-flex items-center space-x-2">
            <span>
              <svg
                width="30"
                height="30"
                viewBox="0 0 50 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                  fill="red"
                ></path>
              </svg>
            </span>
            <span className="font-bold ">Ashish</span>
          </div>
        </NavLink>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? 'red' : 'green',
                })}
                className={
                  `text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-900 ]`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'green',
              })}
                to="/about"
                className={`text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-900 `}

              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'green',
              })}
                to="/contact"                
                className={`text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-900 `}

              >
                Contact
              </NavLink>
              </li>
                
              <li>
              <NavLink
               style={({ isActive }) => ({
                color: isActive ? 'red' : 'green',
              })}
                to="/Error 404"
                className={`text-sm font-semibold text-gray-800 dark:text-gray-100 hover:text-gray-900 `}
                >
                404 Error
              </NavLink>
                </li>
          </ul>
        </div>
        <div className="toggle">
          <label class="switch">
            <span className="sun">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <g fill="#ffd43b">
                  <circle r="5" cy="12" cx="12"></circle>
                  <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                </g>
              </svg>
            </span>
            <span className="moon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
              </svg>
            </span>
            <input type="checkbox" onChange={switchTheme} class="input" />
            <span className="slider"></span>
          </label>
          <label></label>
        </div>

        <div className="hidden lg:block "></div>
        <div className="lg:hidden dark:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 cursor-pointer "
          >
            <line  className="" x1="4" y1="12" x2="20" y2="12"></line>
            <line className="" x1="4" y1="6" x2="20" y2="6"></line>
            <line className="" x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
