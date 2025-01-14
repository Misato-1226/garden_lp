import React from "react";
import Image from "next/image";

export const Map = () => {
  return (
    <div className="h-[100vh] bg-emerald-700">
      <h1 className="text-center text-white font-semibold text-3xl p-14">
        Garden Map
      </h1>
      <div className="flex items-center justify-center">
        <Image
          height={600}
          width={600}
          src="/festival-of-lights-event-map-1.png"
          alt=""
        />
      </div>
    </div>
  );
};
