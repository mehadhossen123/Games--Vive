import React from "react";
import {
  FaGamepad,
  FaDownload,
  FaMobileAlt,
  FaSyncAlt,
  FaShieldAlt,
  FaSearch,
  FaPlay,
  FaShareAlt,
} from "react-icons/fa";
import img from "../assets/coolbackgrounds-gradient-cool.png";

const AboutUs = () => {
  return (
    <div
      className="py-10"
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      {/* Hero */}
      <p className="text-3xl md:text-4xl text-center font-bold mb-10 text-transparent bg-clip-text mt-24 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        Thank You for Visiting Us
      </p>

      {/* Intro */}
      <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6 mb-10 transform transition hover:scale-105">
        <p className="text-gray-700 leading-relaxed text-lg  transform transition hover:scale-105">
          Welcome to GameVerse, your digital hub for fun, fast, and lightweight
          browser games. Our platform brings together a curated selection of
          interactive games designed to be accessible, engaging, and enjoyable
          for players of all ages. No downloads, no unnecessary steps — just
          click and play.
        </p>
      </div>

      {/* Mission */}
      <p className="text-2xl md:text-3xl text-center font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        Our Mission
      </p>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto p-6 transform transition hover:scale-105 mb-10">
        <p className="text-gray-700 leading-relaxed text-lg transform transition hover:scale-105">
          Our mission is simple: to make gaming accessible for everyone. We
          focus on building and hosting high-quality web games that load quickly
          and run smoothly on any device, whether you're on mobile, tablet, or
          desktop. We believe that great gameplay should be instant, seamless,
          and barrier-free.
        </p>
      </div>

      {/* Vision */}
      <p className="text-2xl md:text-3xl text-center font-semibold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        Our Vision
      </p>
      <div className="bg-white shadow-lg rounded-lg max-w-4xl mx-auto transform transition hover:scale-105 p-6 mb-10">
        <p className="text-gray-700 leading-relaxed text-lg transform transition hover:scale-105">
          We aim to become one of the most user-friendly game hubs on the web —
          a place where creativity, simplicity, and accessibility come together.
          Our future vision includes expanding our library, improving gameplay
          quality, and creating a welcoming space for casual players around the
          world.
        </p>
      </div>

      {/* What We Offer & How to Play */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* What We Offer */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
          <p className="text-xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            What We Offer
          </p>
          <ul className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <FaGamepad className="text-purple-500 mt-1" />
              <span>
                Curated Games — Handpicked titles tested for performance, fun,
                and usability.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaDownload className="text-pink-500 mt-1" />
              <span>
                No Downloads Required — Play instantly in your browser, no
                installation needed.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaMobileAlt className="text-red-500 mt-1" />
              <span>
                Mobile Friendly — Fully optimized for touch screens and small
                devices.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaSyncAlt className="text-purple-500 mt-1" />
              <span>
                Regular Updates — Our game library grows continuously with new
                releases and improvements.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaShieldAlt className="text-pink-500 mt-1" />
              <span>
                Safe & Clean Experience — Family-friendly content with minimal
                ads.
              </span>
            </li>
          </ul>
        </div>

        {/* How to Play */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition transform hover:scale-105">
          <p className="text-xl font-semibold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            How to Play
          </p>
          <ol className="space-y-4 text-gray-700 leading-relaxed">
            <li className="flex items-start gap-3">
              <FaSearch className="text-purple-500 mt-1" />
              <span>
                Browse — Search or explore categories to find a game you like.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaPlay className="text-pink-500 mt-1" />
              <span>
                Play — Open the game and start playing immediately — most titles
                load in seconds.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaShareAlt className="text-red-500 mt-1" />
              <span>
                Share — Invite friends or bookmark your favorite games for
                later.
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
