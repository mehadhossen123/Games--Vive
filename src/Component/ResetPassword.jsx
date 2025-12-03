import React, { use } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../Provider/AuthContext';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import img1 from "../assets/coolbackgrounds-gradient-cool.png";
import img2 from '../assets/trophy.png'
import { motion } from 'motion/react';
motion

const ResetPassword = () => {
  const {  resetPassword,setLoading } = use(AuthContext);
  const emailRef=useRef(null)
  const navigate=useNavigate()
  //   handleresetpassword function here

  const handleResetPassword = () => {
    const email=emailRef.current.value;
    resetPassword(email).then(()=>{
       
        toast.success("please check email to reset your password")
        setLoading(false)
        navigate("/auth/login")
    }).catch(()=>{

    })
  };

  return (
    <div>
      {/* Navbar is here  */}
      <header>
        <Navbar></Navbar>
      </header>

      <div
        style={{ backgroundImage: `url(${img1})` }}
        className="flex justify-center items-center min-h-screen shadow-2xl"
      >
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <div className="flex items-center">
            <img className="w-[50px] " src={img2} alt="" />
            <h2 className="fieldset-legend text-center text-2xl">
              Reset your password
            </h2>
          </div>
          <label className="label">Your email</label>
          <input
            ref={emailRef}
            type="email"
            className="input"
            placeholder="Enter your email"
          />
          <motion.button
             onclick={handleResetPassword}
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 0.9 }}
            type="submit"
            className="px-6 py-2 text-xl cursor-pointer font-bold text-white rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Update
          </motion.button>
        </fieldset>
      </div>
    </div>
  );
};

export default ResetPassword;