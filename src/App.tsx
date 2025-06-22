// import React from "react";
import CircularPathAnimation from "./components/animations/index.tsx";
// import logo from "./logo.png";

import {
  // Moon,
  // Triangle,
  // Snowflake,
  // Settings,
  // Droplets,
  // Play,
  ChevronDown,
  User,
  ArrowRight,
  Menu,
} from "lucide-react";

function App() {
  return (
    <div className="h-screen bg-gradient-to-br from-black via-gray-900 to-aquamarine relative overflow-hidden">
      {/* Radial Gradient Overlay */}
      <CircularPathAnimation />
      <div className="absolute inset-0 bg-gradient-radial from-black/60 via-gray-900/40 to-transparent"></div>

      {/* Falling Stars Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-fall-star opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-1 h-1 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6">
        {/* <img src={logo} alt="logo" /> */}
        <div className="hidden lg:flex items-center space-x-8 bg-black/30 backdrop-blur-md rounded-full px-8 py-4 ml-[100px] border border-aquamarine/20 shadow-lg">
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            Web3 App
          </a>
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            Portfolio
          </a>
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            Lockup
          </a>
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            Features
          </a>
          <a
            href="#"
            className="text-white hover:text-aquamarine transition-colors text-sm font-medium px-3 py-1 rounded-full hover:bg-white/10"
          >
            FAQ
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-3 text-white text-sm bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-aquamarine/30">
            <span className="font-medium">Protection</span>
            <ArrowRight className="w-4 h-4 text-aquamarine" />
            <div className="w-8 h-8 bg-aquamarine/20 rounded-full flex items-center justify-center border border-aquamarine/40">
              <span className="text-xs font-bold text-aquamarine">U</span>
            </div>
          </div>
          <button className="hidden md:flex items-center space-x-2 text-white hover:text-aquamarine transition-colors bg-black/20 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20 hover:border-aquamarine/40">
            <User className="w-4 h-4" />
            <span className="text-sm font-medium">Create Account</span>
          </button>
          <button className="lg:hidden text-white hover:text-aquamarine transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="">
        <div className="relative min-h-[80vh] gap-[30px] z-10 flex flex-col items-center justify-center  px-8 text-center">
          {/* Unlock Assets Spark */}
          <div className=" flex items-center space-x-3 text-white text-sm bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-aquamarine/30 shadow-lg">
            <div className="w-2 h-2 bg-aquamarine rounded-full animate-pulse shadow-lg shadow-aquamarine/50"></div>
            <span className="font-medium text-[14px] md:text-[20px] ">
              Fuel Your Financial Fire!
            </span>
            <ArrowRight className="w-4 h-4 text-aquamarine" />
          </div>

          {/* Main Heading */}
          <h1 className="text-[26px] md:text-[54px] font-bold leading-tight">
            <span className="text-white">
              Secure Your Assets in <br /> a{" "}
            </span>
            <span className="bg-gradient-to-r from-aquamarine to-cyan-300 bg-clip-text text-transparent">
              Single Tap
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-[14] md:text-[18px]  text-gray-200  max-w-3xl leading-relaxed">
            Explore the world of art assets, where cutting-edge blockchain
            merges with financial mastery. Where artistic value meets financial
            innovation—powered by blockchain
          </p>

          {/* Action Buttons */}
          <div className="flex  flex-row items-center space-x-4  ">
            <button className="bg-gradient-to-r text-[15px] md:text-[18px] from-aquamarine to-cyan-400 hover:from-cyan-400 hover:to-aquamarine text-black px-4 md:px-10 py-4 rounded-xl font-bold transition-all shadow-lg shadow-aquamarine/30 hover:shadow-aquamarine/50 hover:scale-105 flex items-center space-x-2">
              <span>Open App</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-black/30 text-[15px] md:text-[18px] backdrop-blur-md hover:bg-black/40 text-white border border-aquamarine/30 hover:border-aquamarine/50 px-4 md:px-10 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-aquamarine/20">
              Discover more
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-4 left-4">
        <div className="flex items-center space-x-4 text-white">
          <div className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-aquamarine/30 hover:border-aquamarine/50 transition-colors cursor-pointer">
            <ChevronDown className="w-5 h-5 text-aquamarine" />
          </div>
          <span className="text-sm font-medium">Scroll down</span>
        </div>
      </div>
    </div>
  );
}

export default App;
