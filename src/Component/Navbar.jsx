import React, { use } from "react";
import { Link, NavLink } from "react-router";

import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import img from "../assets/trophy.png";

const Navbar = () => {

  const { user, sigOut } = use(AuthContext);
  const handleLogOut = () => {
    sigOut()
      .then(() => {
        toast.success("Logout successfully");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allGame"
          className={({ isActive }) => (isActive ? "" : "")}
        >
          All games
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

      {user ? (
        <li>
          <button
            className="bg-red-400 border rounded-3xl border-none text-black "
            onClick={handleLogOut}
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
                isActive ? " bg-green-500 rounded-3xl px-3 text-white" : ""
              }
            >
              Login
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/auth/register"
              className={({ isActive }) =>
                isActive ? " bg-green-500 rounded-3xl px-3 text-white" : ""
              }
            >
              Register
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive ? " bg-green-500 rounded-3xl px-3 text-white" : ""
          }
        >
          About us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="  fixed w-full z-10 top-0 bg-white">
      <div className="navbar ">
        <div className="navbar-start  ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>

          <div className="flex items-center">
            <img
              className="w-[50px] lg:block hidden h-[50px]"
              src={img}
              alt=""
            />
            <h1 className="text-4xl  font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              GameVerse
            </h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* Profile image is here  */}
        {
          <div className="navbar-end ">
            <div>
              <button
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
              >
                <img
                  className="h-[40px] w-[40px] rounded-full cursor-pointer "
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt=""
                />
              </button>
              <p>{user?.displayName}</p>
            </div>
            {/* Here is a drop dow  */}
            <>
              <ul
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                popover="auto"
                id="popover-1"
                style={
                  { positionAnchor: "--anchor-1" } /* as React.CSSProperties */
                }
              >
                <li>
                  <Link to={"/auth/my-profile"} className="font-bold">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/auth/profile"}
                    className="text-black font-bold
                  "
                  >
                    Update profile
                  </Link>
                </li>
              </ul>
            </>
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;
