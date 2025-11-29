import React, { useRef } from "react";
import { motion, useInView } from "motion/react";

const NewsLetter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    amount: 0.3, // div এর ৩০% দেখা গেলে active হবে
  });

  return (
    <div>
      <motion.div
        ref={ref}
        className="w-11/12 mx-auto py-10 shadow-2xl rounded-lg"
        initial={{ opacity: 0, y: 60, scale: 1 }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1 }
            : { opacity: 0, y: 60, scale: 0.95 }
        }
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="z-10">
          <img
            className="h-[300px] object-cover w-full rounded-lg"
            src="https://i.pinimg.com/1200x/f8/05/a7/f805a713c3df0180bf2811a6db5edbdc.jpg"
            alt=""
          />

          <p className="text-gray-700 mt-5 font-bold text-center">
            A whole new world for gamers! Play, compete, and level up your
            skills like never before. From shooters to racing and strategy,
            GameVerse has it all. Join now and dive into your next epic gaming
            adventure! 🚀
          </p>

          <form className="w-full">
            <div className="indicator flex justify-center mt-6">
              <div className="indicator-item indicator-bottom">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary"
                >
                  Subscribe Now to get update
                </motion.button>
              </div>

              <div className="card border-base-300 border shadow-sm ml-4">
                <div className="card-body">
                  <h2 className="card-title">GameVerse</h2>
                  <p>Rerum reiciendis beatae tenetur excepturi</p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
