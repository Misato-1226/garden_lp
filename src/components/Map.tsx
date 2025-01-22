import React from "react";
import Image from "next/image";

export const Map = () => {
  return (
    <div className="xl:h-[100vh] bg-emerald-700">
      <h1 className="text-center text-white font-semibold text-2xl md:text-4xl p-14">
        Garden Map
      </h1>
      <div className="flex items-center justify-center xl:p-0 p-5">
        <Image
          height={700}
          width={700}
          src="/festival-of-lights-event-map-1.png"
          alt=""
        />
      </div>
    </div>
  );
};
