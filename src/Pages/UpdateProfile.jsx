import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Navbar from "../Component/Navbar";
import { toast } from "react-toastify";
import Loading from "../Component/Loading";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import img from "../assets/coolbackgrounds-gradient-cool.png"


const Profile = () => {
  const { updateUser, setLoading, loading, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;

    setLoading(true);

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        // Update local user state
        setUser((current) => ({
          ...current,
          displayName: name,
          photoURL: photo,
        }));

        toast.success("Profile updated successfully!");

        e.target.reset();

        // Stop loading and navigate after update
        setLoading(false);
        navigate("/"); // redirect to home
      })
      .catch(() => {
        
        toast.error("Failed to update profile");
        setLoading(false);
      });
  };

  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <form
        style={{ backgroundImage: `url(${img})` }}
        onSubmit={handleUpdateProfile}
        className="flex justify-center items-center min-h-screen"
      >
        <div className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
          <p className="text-2xl text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Update your profile
          </p>

          <label className="label">Name</label>
          <input
            required
            type="text"
            name="name"
            className="input"
            placeholder="Enter your name.."
          />

          <label className="label">Photo URL</label>
          <input
            required
            type="text"
            name="photo"
            className="input"
            placeholder="Enter your photo url"
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 0.9 }}
            type="submit"
            className="px-6 py-2 text-xl cursor-pointer font-bold text-white rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
          >
            Update
          </motion.button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
