// Header.jsx
import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";

const Header = () => {
  // Create a ref to target the typewriter container
  const typewriterRef = useRef(null);

  useEffect(() => {
    if (typewriterRef.current) {
      // Initialize the typewriter effect after the component mounts
      new Typewriter(typewriterRef.current, {
        strings: [
          "Welcome to Khushbu Jewellers",
          "Exclusive Designs Await You!",
        ],
        autoStart: true,
        loop: true,
        delay: 75,
      });
    }
  }, []);

  return (
    <div>
      {/* Top Header */}
      <div className="h-[40px] w-full bg-primary flex items-center justify-center">
        {/* Typewriter Text */}
        <span
          ref={typewriterRef}
          className="text-white text-lg font-medium"
        ></span>
      </div>
      {/* middel header */}
      <div className="w-full">
        <div className="w-[90%] mx-auto">
          {/* logo */}
          <div className="logo text-4xl font-bold">Rjsurya</div>
          {/* searchbar */}
          <div className="search">
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
