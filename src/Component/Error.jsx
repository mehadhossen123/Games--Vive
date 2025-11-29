import React from 'react';
import img from '../assets/App-Error.png'
import { useNavigate } from 'react-router';
import Navbar from './Navbar';
import Footer from './Footer'

const Error = () => {
    const navigate=useNavigate()
      
    return (
      <>
        {/*navbar   */}
        <Navbar></Navbar>

        <div>
          <div className="">
            <div className="flex justify-center">
              <img className="" src={img} alt="" />
            </div>
            <h1 className="text-5xl text-center text-red-500">
              Oops {``}!
            </h1>
            <p className="text-sm text-gray-400 text-center my-2">
              The page you are looking for is not available.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate("/")}
                className="btn bg-blue-500 text-white"
              >
                {" "}
                Go Home
              </button>
            </div>
          </div>
        </div>
        <Footer></Footer>

        {/* footer */}
      </>
    );
        
};

export default Error;