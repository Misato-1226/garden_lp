import React from "react";
import Image from "next/image";

export const Map = () => {
  return (
    <div className="h-[100vh]">
      <h1 className="text-center font-semibold text-5xl p-14">Garden Map</h1>
      <div className="flex items-center justify-center">
        <Image
          height={900}
          width={900}
          src="/festival-of-lights-event-map-1.png"
          alt=""
        />
      </div>
    </div>
  );
};
