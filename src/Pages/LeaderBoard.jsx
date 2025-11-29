"use client";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { motion } from "motion/react";
import { useNavigate,  } from "react-router";
import Loading from "../Component/Loading";

const LeaderBoard = () => {
useEffect(() => {
  document.title = "Dashboard";
}, []);




  const { user, game, loading, currentGame } = useContext(AuthContext);
  const navigate = useNavigate();

     console.log(currentGame);
     


  if (loading) {
    return   <Loading></Loading>
  }
    
  

  // Example user stats (replace with real data if available)
  const userStats = {
    gamesPlayed: game?.length || 0,
    highScore: 1200,
    badges: 3,
  };

  const recentGames = game?.slice(0, 5) || [];
  const leaderboard = [
    { id: 1, name: "PlayerOne", score: 1500 },
    { id: 2, name: "GamerX", score: 1300 },
    { id: 3, name: "Rafi", score: 1200 },
    { id: 4, name: "Alice", score: 1100 },
    { id: 5, name: "Bob", score: 1000 },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-lg text-white"
      >
        <h2 className="text-2xl font-bold">
          Hi, {user.displayName || "Gamer"}!
        </h2>
        <img
          src={user.photoURL || "/default-avatar.png"}
          alt="profile"
          className="w-12 h-12 rounded-full border-2 border-white"
        />
      </motion.div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Games Played</h3>
          <p className="text-2xl font-bold">{userStats.gamesPlayed}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Highest Score</h3>
          <p className="text-2xl font-bold">{userStats.highScore}</p>
        </div>
        <div className="bg-base-200 p-4 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-lg font-semibold">Badges</h3>
          <p className="text-2xl font-bold">{userStats.badges}</p>
        </div>
      </motion.div>

      {/* Recent Games */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h3 className="text-xl font-semibold mb-2">Recently Played</h3>
        <ul className="space-y-2">
          {recentGames.map((g) => (
            <li
              key={g.id}
              className="flex justify-between bg-base-200 p-3 rounded-lg shadow hover:shadow-lg transition"
            >
              <span>{g.name}</span>
              <button
                onClick={() => navigate(`/allGame/${g.id}`)}
                className="px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg hover:scale-105 transform transition"
              >
                Play Again
              </button>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Leaderboard */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-xl font-semibold mb-2">Leaderboard</h3>
        <ol className="bg-base-200 p-4 rounded-lg shadow space-y-2">
          {leaderboard.map((player, idx) => (
            <li key={player.id} className="flex justify-between">
              <span>
                {idx + 1}. {player.name}
              </span>
              <span>{player.score} pts</span>
            </li>
          ))}
        </ol>
      </motion.div>

      {/* Daily Challenge / Fun Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-r from-purple-400 to-pink-400 p-4 rounded-lg text-white"
      >
        <h3 className="text-lg font-semibold mb-1">Daily Challenge</h3>
        <p>Play 3 games today to earn bonus points!</p>
      </motion.div>
    </div>
  );
};

export default LeaderBoard;
