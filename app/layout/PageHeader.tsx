import React from "react";
import logo from "../asset/logo.png";

export const PageHeader: React.FC = () => {
  const handleLogoClick = () => {
    // Handle the click on the logo 
    window.location.href = "/";
  };

  return (
<div className="fixed top-0 left-0 right-0 z-10 h-16 flex justify-between items-center p-4 bg-white text-black">
  {/* Logo, Website Name, and About Us Button */}
  <div className="flex items-center">
    <a href="/" className="flex items-center">
      <img src={logo} className="h-10 cursor-pointer" alt="Logo" />
      <span className="ml-2 text-xl font-medium font-bold">Tasking</span>
    </a>
    {/* About Us Button */}
    <button
      onClick={() => {
        // Handle the click on the About Us button
        window.location.href = "/about";
      }}
      className="ml-5 font-medium px-4 py-2 text-3x1 rounded-full hover:bg-gray-100"
    >
      About Us
    </button>
  </div>

  {/* Navigation Buttons */}
  <div className="flex items-center space-x-4">
    {/* Sign Up Button */}
    <button
      onClick={() => {
        // Handle the click on the Sign Up button
        window.location.href = "/signup";
      }}
      className="text-black px-4 py-2 font-medium font-bold rounded-full hover:bg-gray-100"
    >
      Sign Up
    </button>

    {/* Log In Button */}
    <button
      onClick={() => {
        // Handle the click on the Log In button
        window.location.href = "/login";
      }}
      className="bg-black text-white px-4 py-2 font-bold rounded-full hover:bg-zinc-700"
    >
      Log In
    </button>
  </div>
</div>


  );
};
