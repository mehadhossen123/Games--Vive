import React, { use, useEffect, } from 'react';
import Banner from '../Component/Banner';
import Marquee from "react-fast-marquee";
import PopularGames from '../Component/PopularGames';
import { AuthContext } from '../Provider/AuthContext';
import Loading from '../Component/Loading';
import NewsLetter from '../Component/NewsLetter';
import Review from './Review';

const Home = () => {

  useEffect(() => {
    document.title = "Home";
  }, []);

  const {loading}=use(AuthContext)

  if(loading){
    return <Loading></Loading>
  }
    return (
      <div className="mt-24 gap-5">
        <Marquee
         
        >
          <p className="font-bold text-2xl   lg:mt-1 mt-10 ">
            {" "}
            Welcome to GameHub — Explore, Play, and Support Indie Developers! 🚀
          </p>
          <p className="font-bold text-2xl   lg:mt-1 mt-10 ">
            {" "}
            Welcome to GameHub — Explore, Play, and Support Indie Developers! 🚀
          </p>
          <p className="font-bold text-2xl   lg:mt-1 mt-10 ">
            {" "}
            Welcome to GameHub — Explore, Play, and Support Indie Developers! 🚀
          </p>
        </Marquee>
        <div className="my-10">
          <Banner></Banner>
        </div>
        <div className="lg:mt-1 mt-10">
          <PopularGames> </PopularGames>
          <NewsLetter></NewsLetter>
        </div>
        <div>
          <Review></Review>
        </div>
      </div>
    );
};

export default Home;