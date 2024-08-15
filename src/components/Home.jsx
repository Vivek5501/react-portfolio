import React from "react";
// import HeroImage from "../assets/heroImage.png";
import Image from "../assets/image.jpg"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-2xl sm:text-4xl font-bold text-white">Hi, I'm</h3>
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            Vivek
          </h2>
          <br></br>
          <h3 className="text-2xl sm:text-4xl font-bold text-white">Web Developer</h3>
          <p className="text-gray-500 py-4 max-w-md">
            Currently, I love to work on web application using technologies like
            React, NodeJs, Tailwind and MongoDb.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={Image}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;