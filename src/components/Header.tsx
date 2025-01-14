import React from "react";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-black h-28">
      <header className="h-full">
        <ul className="h-full flex justify-center items-center gap-x-10 font-bold text-xl text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Map</li>
          <li>
            <Link href="/payment">Events</Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
