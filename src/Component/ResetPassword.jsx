import React, { use } from 'react';
import Navbar from './Navbar';
import { AuthContext } from '../Provider/AuthContext';
import { useRef } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const ResetPassword = () => {
  const { user, resetPassword,setLoading } = use(AuthContext);
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

      <div className="flex justify-center items-center min-h-screen shadow-2xl">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <h2 className="fieldset-legend text-center text-2xl">
            Reset your password
          </h2>

          <label className="label">Your email</label>
          <input
           ref={emailRef}
            type="email"
            className="input"
            placeholder="Enter your email"
          />

          <button
            onClick={handleResetPassword}
            className="btn btn-neutral mt-4"
          >
            Reset{" "}
          </button>
        </fieldset>
      </div>
    </div>
  );
};

export default ResetPassword;