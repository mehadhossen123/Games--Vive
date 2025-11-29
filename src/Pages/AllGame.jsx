import React, { use, useEffect } from 'react';
import Navbar from '../Component/Navbar';
import { AuthContext } from '../Provider/AuthContext';
import { CiStar } from 'react-icons/ci';
import { Navigate, useNavigate } from 'react-router';
import { TbListDetails } from "react-icons/tb";

const AllGame = () => {
  useEffect(() => {
    document.title = "allGame";
  }, []);





  
  const { game, setCurrentGame } = use(AuthContext);
  const navigate=useNavigate();

    return (
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 w-11/12  mx-auto my-10">
          {game?.map((singleGame) => (
            <div
              key={singleGame.id}
              className="py-6 shadow-2xl rounded-xl overflow-hidden bg-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl"
            >
              {/* Image part */}
              <div className="h-56 w-full overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  src={singleGame.coverPhoto}
                  alt={singleGame.title}
                />
              </div>

              {/* Content */}
              <div className="px-5 mt-3">
                <p className="font-bold text-gray-800 text-lg">
                  {singleGame.title}
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1 font-semibold">
                      {singleGame.ratings}
                    </span>
                    <CiStar className="text-yellow-400 text-xl" />
                    <CiStar className="text-yellow-400 text-xl" />
                    <CiStar className="text-yellow-400 text-xl" />
                  </div>

                  <button className="px-4 py-2 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-indigo-500 transition-all duration-300">
                    Play Now
                  </button>
                </div>
              </div>
              <div className="flex justify-center mt-3">
                <button
                  onClick={() => {
                  
                    navigate(`/allGame/${singleGame.id}`);
                   
                  }}
                  className="flex items-center justify-center gap-2 px-5 w-full mx-3 py-2 rounded-lg text-white font-semibold 
             bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             hover:from-pink-500 hover:to-purple-500 
             transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  See Details <TbListDetails className="text-xl" />
                </button>
              </div>
            </div>
          ))}

          {/* All Games Button */}
          <div className="flex items-center justify-center"></div>
        </div>

        {/* </section>) */}
      </div>
    );
};

export default AllGame;