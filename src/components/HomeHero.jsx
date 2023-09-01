import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/NetFlex.svg";

const HomeHero = () => {
  return (
    <div 
      className="flex flex-col items-center min-h-screen  gap-2 p-1 "
      style={{
        backgroundImage: `linear-gradient(rgb(0 0 0/60%),rgb(0 0 0/60%)), url(./public/images/misc/home.jpeg)`,
      }}
    >


      <header className="w-full flex flex-row justify-between items-center gap-3 p-1">
        <div>
          <Link to="/">
            <img
              className="w-[83%]  h-16 ml-5"
              src={img}
              alt="NetFlex profile"
            />
          </Link>
        </div>
        <div>
          <Link
            className="px-4 py-2 text-lg mr-5 rounded text-white bg-red-500 shadow"
            to="/Login"
          >
            Login
          </Link>
        </div>
      </header>

       // main selection
      <main className="flex flex-1 flex-col justify-center items-center text-center text-white gap-3 space-x-4">

        <h1 className="text-3xl lg:text-5xl font-bold">Unlimited movies, TV shows, and more.</h1>
        <h2 className="text-2xl lg:text-3xl ">Watch any where , Cancel any time</h2>

        <p className=" lg:text-xl">Ready to watch? Enter your email to create or restart your membership.</p>

        <div className=" flex flex-col md:flex-row justify-center items-center gap-2 space-x-3 md:space-x-0 ">
            <input className=" px-8 py-4 shadow outline-white boder border-white rounded " type="text" placeholder="Email address" />
            <button className="text-center px-5 py-4 shadow bg-red-500 text-white items-center rounded">
            Get Started
          </button>
        </div>
    
      </main>












    </div>
  );
};

export default HomeHero;
