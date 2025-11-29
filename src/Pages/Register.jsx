import React, { use, useEffect, useState } from 'react';
import Navbar from '../Component/Navbar';
import { Link, Navigate, useNavigate,  } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { toast } from 'react-toastify';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import Loading from '../Component/Loading';
import { motion, scale } from 'motion/react';
motion

const Register = () => {

useEffect(() => {
  document.title = "Register";
}, []);

const { userRegister, user, setUser,setLoading, loading,updateUser } = use(AuthContext);
const [emialError,setEmailError]=useState("")
const [pass,setPass]=useState(true)
const navigate=useNavigate()


 if(loading){
  return <Loading></Loading>
 }

const handleRegister=(e)=>{
  e.preventDefault();
  const form=e.target;
  
  const name=form.name.value;
  const photo=form.photo.value;
  const email=form.email.value;
  const password=form.password.value;
  const passReg =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(!passReg.test(password)){
  setEmailError(
    "Password must be at least 8 chars, include uppercase, lowercase, number & special char"
  );
  return;

}
  
  userRegister(email,password).then(result=>{
    updateUser({
      displayName:name,
      photoURL:photo
    }).then(()=>{
      setUser(result.user)
      setLoading(false)
      navigate("/")
      
    }).catch(()=>{})
    // setUser(result.user)
    toast.success("Register successfully")
    form.reset()
  }).catch(error=>{
    toast.error(error.message)
    setLoading(false)
  })
  
  
}



    return (
      <section className=" bg-gradient-to-r from-purple-600 via-pink-500 to-red-400">
        <header>
          <Navbar></Navbar>
        </header>

        <div className=" flex justify-center items-center min-h-screen ">
          <motion.form
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleRegister}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 "
          >
            <p className=" text-transparent bg-clip-text text-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-3xl font ">
              Please Register !
            </p>
            {/*name  */}
            <label className="label">Name</label>
            <motion.input
              whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
              whileFocus={{
                scale: 1.05,
                borderColor: "#6366F1",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
              type="text"
              className="input"
              name="name"
              placeholder="Enter your name"
            />
            {/* photo */}

            <label className="label">Photo URL</label>
            <motion.input
              whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
              whileFocus={{
                scale: 1.05,
                borderColor: "#6366F1",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
              type="text"
              className="input"
              name="photo"
              placeholder="Enter Photo url"
            />
            {/* email */}
            <label className="label">Email</label>
            <motion.input
              whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
              whileFocus={{
                scale: 1.05,
                borderColor: "#6366F1",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
              required
              type="email"
              className="input"
              name="email"
              placeholder="Enter your email "
            />
            {/* password */}

            <label className="label">Password</label>
            <div className="relative">
              <motion.input
                whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
                whileFocus={{
                  scale: 1.05,
                  borderColor: "#6366F1",
                  boxShadow: "0 0 10px rgba(99,102,241,0.6)",
                }}
                required
                name="password"
                type={pass ? "password" : "text"}
                className="input"
                placeholder="Password"
              />
              <span
                onClick={() => setPass(!pass)}
                className="absolute right-5 top-3"
              >
                {pass ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>

            <p className="text-red-700">{emialError}</p>

            <motion.button
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.95 }} 
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              type="submit"
              className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 btn rounded-sm  mt-4"
            >
              Register
            </motion.button>
            <p>
              Already have an account? please{" "}
              <Link className="text-blue-500" to="/auth/login">
                {" "}
                Login
              </Link>
            </p>
          </motion.form>
        </div>
      </section>
    );
};

export default Register;