import React, { use, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthContext';
import { CiStar } from 'react-icons/ci';
import { TfiControlBackward } from "react-icons/tfi";
import { FaCloudDownloadAlt } from "react-icons/fa";


const Details = () => {
    const {id}=useParams()
    const { game } = use(AuthContext);
    const findGame=game?.find(games=>games.id==id)
    console.log(findGame)
   
    const navigate=useNavigate()
    // console.log(findGame);
   
    return (
      <div>
        <div className="w-11/12 mx-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Side - Image + Title */}
          <div className="flex flex-col items-center">
            <img
              src={findGame?.coverPhoto}
              alt={findGame?.title}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
            <h1 className="mt-5 text-3xl font-bold text-gray-800 text-center">
              {findGame?.title}
            </h1>
            <div className="flex items-center mt-2">
              <span className="text-xl font-semibold mr-2">
                {findGame?.ratings}
              </span>
              <CiStar className="text-yellow-400 text-2xl" />
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="flex flex-col justify-between bg-white p-6 rounded-xl shadow-xl">
            <div className="space-y-4">
              <p className="text-gray-700 font-bold">{findGame?.description}</p>
              <p className="text-gray-600">
                <span className="font-bold text-2xl">Category:</span>{" "}
                {findGame?.category}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold text-2xl">Developer:</span>{" "}
                {findGame?.developer}
              </p>
            </div>

            {/* Download / Play Button */}
            <div className="mt-6">
              {/* <a
                href={findGame?.downloadLink}
                target="_blank"
                className="inline-block w-full text-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
              >
                <FaCloudDownloadAlt className='relative top-7 left-40 text-3xl'/>
                Download / Play
              </a> */}
              <button
                onClick={() => window.open(findGame?.downloadLink)}
                className="w-full px-6 py-3 rounded-lg text-white font-semibold 
              bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400
               hover:from-purple-500 hover:to-pink-500 
               shadow-lg hover:shadow-2xl transition-all duration-300 
               flex items-center justify-center gap-2"
              >
                <FaCloudDownloadAlt className="text-2xl" />
                Download/play
              </button>
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => navigate(-1)}
                  className="w-full px-6 py-3 rounded-lg text-white font-semibold 
             bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-cyan-400
               hover:from-purple-500 hover:to-pink-500 
               shadow-lg hover:shadow-2xl transition-all duration-300 
               flex items-center justify-center gap-2"
                >
                  <TfiControlBackward className="text-2xl" />
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Details;