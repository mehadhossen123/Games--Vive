import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import PopularCard from "./PopularCard";
import Loading from "./Loading";

const PopularGames = () => {
  const { game } = useContext(AuthContext);

 
  if (!Array.isArray(game) || game.length === 0) {
    return <Loading></Loading>
  }

  
  const sortedData = [...game].sort(
    (a, b) => parseFloat(b.ratings) - parseFloat(a.ratings)
  ).slice(0,8)

  return (
    <>
      <p className="text-2xl text-center mt-5 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        Check out the top trending games right now!
      </p>
      <PopularCard data={sortedData} />
    </>
  );
};

export default PopularGames;
