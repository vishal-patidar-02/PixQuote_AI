import React, { use, useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const {credit,loadCreditsData} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link className="flex items-center" to="/">
        <img className="w-13 sm:w-15" src={assets.logo_icon} alt="logo" />
        <p className="text-xl sm:text-2xl mx-0.5 sm:mx-2 font-medium">PixQuote AI</p>
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap:3">
             <button onClick={()=>navigate('/buy')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 ">
              <img className="w-5" src={assets.credit_icon} si alt="icon" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">credits : {credit}</p>
             </button>
             <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get started{" "}
          <img className="w-3 sm:w-4" src={assets.arrow_icon} alt="" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
