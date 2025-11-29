import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';


import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';


const Navbar = () => {
  const navigate = useNavigate ();
  const {user,sigOut}=use(AuthContext)
  const handleLogOut=()=>{
    sigOut().then(()=>{
      toast.success("Logout successfully")
    }).catch((error)=>{
      toast.error(error.message)
    })

  }

    const links=<>
    <li><NavLink to="/" className={({isActive})=>isActive?"text-green-400 border-b-green-700":""}>Home</NavLink></li>
    <li><NavLink to="/allGame" className={({isActive})=>isActive?"text-green-400 border-b-green-700":""}>All games</NavLink></li>
     
   <li><NavLink to="/leaderBoard" className={({isActive})=>isActive?"text-green-400 border-b-green-700":""}>Dashboard</NavLink></li>
      
     {user? <li><button className='bg-green-600 border' onClick={handleLogOut}>Logout</button></li>:
       <>
       <li><NavLink to="/auth/login" className={({isActive})=>isActive?"text-green-400 border-b-green-700":""}>Login</NavLink></li>
    
     
        
    <li><NavLink to="/auth/register" className={({isActive})=>isActive?"text-green-400 border-b-green-700":""}>Register</NavLink></li>
    
       </>

     }
   

   
   
    </>

    
  
    return (
      <div className="">
        <div className="navbar shadow-sm bg-gradient-to-r from-purple-200 via-pink-200 to-rose-200 text-indigo-700  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="w-[100px] lg:block hidden h-[50px]"
                src={"https://img.icons8.com/?size=96&id=68368&format=png"}
                alt=""
              />
              <h1 class="text-4xl  font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                GameVerse
              </h1>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          {user && (
            <div className="navbar-end ">
              <div>
                <img
                  onClick={() => navigate("/auth/profile")}
                  className="h-[50px] w-[50px] rounded-full"
                  src={
                    user?.photoURL
                      ? user?.photoURL
                      : "https://img.icons8.com/?size=96&id=13042&format=png"
                  }
                  alt=""
                />
                <p>{user?.displayName}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;