import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthContext";
import img from "../assets/trophy.png";

const Navbar = () => {
  const { user, sigOut } = useContext(AuthContext);

  const handleLogOut = () => {
    sigOut()
      .then(() => toast.success("Logout successfully"))
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allGame"
          className={({ isActive }) =>
            isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          All Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/leaderBoard"
          className={({ isActive }) =>
            isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          About Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl bg-white shadow-md">
      <div className="flex justify-between items-center py-4 px-4">
        {/* Left: Logo + Mobile dropdown */}
        <div className="flex items-center gap-4">
          {/* Mobile dropdown */}
          <div className="dropdown lg:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4"
            >
              {links}
              {user ? (
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-400 rounded-3xl w-full"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink
                      to="/auth/login"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-green-500 rounded-3xl px-3 text-white"
                          : ""
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/auth/register"
                      className={({ isActive }) =>
                        isActive
                          ? "bg-green-500 rounded-3xl px-3 text-white"
                          : ""
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Logo */}
          <img
            className="w-[50px] h-[50px] lg:block hidden"
            src={img}
            alt="Logo"
          />
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            GameVerse
          </h1>
        </div>

        {/* Center: Horizontal menu (large screens) */}
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right: Profile dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  user?.photoURL
                    ? user.photoURL
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt=""
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 mt-4"
          >
            {user ? (
              <>
                <li>
                  <Link to="/auth/my-profile" className="font-bold">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link to="/auth/profile" className="font-bold">
                    Update Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="bg-red-400 rounded-3xl w-full"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/auth/login"
                    className={({ isActive }) =>
                      isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/auth/register"
                    className={({ isActive }) =>
                      isActive ? "bg-green-500 rounded-3xl px-3 text-white" : ""
                    }
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
