import React, { useState, useContext, useEffect } from "react";
import Navbar from "../Component/Navbar";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import { toast } from "react-toastify";
import { motion } from "motion/react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Loading from "../Component/Loading";

const Login = () => {

useEffect(() => {
  document.title = "Login";
}, []);

  const { logIn, signWithGoogle, setUser, loading, setLoading } =
    useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [passVisible, setPassVisible] = useState(false);

  if (loading) {
    return <Loading />; // loading state দেখাবে
  }

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setLoading(true);

    logIn(email, password)
      .then((result) => {
        setUser(result.user);
        toast.success("Login successfully");
        e.target.reset();

        setLoading(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  const handleGoogleLogin = () => {
    setLoading(true);
    signWithGoogle()
      .then((res) => {
        setUser(res.user);
        toast.success("Google login successful");
        setLoading(false);
        navigate(location.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message || "Google login failed");
        setLoading(false);
        setUser(err.user)
      });
  };

  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 flex justify-center items-center min-h-screen">
        <motion.form
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onSubmit={handleLogIn}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 shadow-lg"
        >
          <p className="text-3xl text-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            Please Login
          </p>

          <label className="label">Email</label>
          <motion.input
            whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
            whileFocus={{
              scale: 1.05,
              borderColor: "#6366F1",
              boxShadow: "0 0 10px rgba(99,102,241,0.6)",
            }}
            name="email"
            type="email"
            className="input"
            placeholder="Email"
            required
          />

          <label className="label">Password</label>
          <div className="relative">
            <motion.input
              whileHover={{ scale: 1.1, borderColor: "#A78BFA" }}
              whileFocus={{
                scale: 1.05,
                borderColor: "#6366F1",
                boxShadow: "0 0 10px rgba(99,102,241,0.6)",
              }}
              name="password"
              type={passVisible ? "text" : "password"}
              className="input"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setPassVisible(!passVisible)}
              className="absolute right-3 top-3 cursor-pointer text-gray-600"
            >
              {passVisible ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>

          <p
            onClick={() => navigate("/auth/forgetPassword")}
            className="my-2 cursor-pointer hover:underline hover:text-blue-400 text-sm"
          >
            Forget Password?
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            type="submit"
            className="w-full cursor-pointer px-6 py-2 mt-2 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-600 transition-all duration-300"
          >
            Login
          </motion.button>

          <div className="divider divider-primary my-4">Or</div>

          <button
            onClick={handleGoogleLogin}
            className="w-full btn bg-white text-black border-[#e5e5e5] flex items-center justify-center gap-2"
          >
            <svg
              aria-label="Google logo"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>

          <p className="mt-4 text-center text-sm">
            New here?{" "}
            <Link className="text-blue-500 hover:underline" to="/auth/register">
              Register
            </Link>
          </p>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;
