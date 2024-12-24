import React from "react";

export const Header = () => {
  return (
    <div className="bg-black border border-amber-300 h-28">
      <header className="h-full">
        <ul className="h-full flex justify-center items-center gap-x-10 font-bold text-3xl text-white">
          <li>Home</li>
          <li>Map</li>
          <li>Events</li>
        </ul>
      </header>
    </div>
  );
};
