import React from "react";
import { CiStar } from "react-icons/ci";
import { useNavigate } from "react-router";

const PopularCard = ({ data }) => {
    const navigate=useNavigate();
  if (!Array.isArray(data) || data.length === 0)
    return <p>Loading popular games...</p>;

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6  mx-auto my-10">
      {data?.map((singleGame) => (
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
                <span className="mr-1 font-semibold">{singleGame.ratings}</span>
                <CiStar className="text-yellow-400 text-xl" />
                <CiStar className="text-yellow-400 text-xl" />
                <CiStar className="text-yellow-400 text-xl" />
                <CiStar className="text-yellow-400 text-xl" />
                <CiStar className="text-yellow-400 text-xl" />
              </div>

              <button onClick={()=>window.open(singleGame?.downloadLink)} className="px-4 py-1 rounded-lg text-white font-semibold bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-600 hover:to-indigo-500 transition-all duration-300">
                Play Now
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* All Games Button */}
      <div className="flex items-center justify-center">
        <button onClick={()=>{
            navigate("/allGame");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }}  className="px-6 py-3 cursor-pointer rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-teal-400 hover:from-teal-400 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-2xl">
          All Games
        </button>
      </div>
    </div>
  );
};

export default PopularCard;
