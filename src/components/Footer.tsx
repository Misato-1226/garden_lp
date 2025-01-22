import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black h-[40vh] text-white flex items-center">
      <footer className="px-10 xl:px-20">
        <h1 className="text-lg xl:text-2xl mb-3">VanDusen Botanical Garden</h1>
        <div className="flex items-center gap-x-3 mb-3 w-5">
          <Image height={35} width={35} src="phone.svg" alt="" />
          <p className="text-md xl:text-lg">+1 236 789 101</p>
        </div>
        <div className="flex items-center gap-x-3 mb-5 w-7">
          <Image height={35} width={35} src="email.svg" alt="" />
          <p className="text-md xl:text-lg">vandusen@contact.com</p>
        </div>
        <div className="flex gap-x-3">
          <div>
            <a href="https://www.instagram.com/vandusengarden/" target="_blank">
              <Image height={40} width={40} src="instagram.svg" alt="" />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/vandusenbotanicalgarden/"
              target="_blank"
            >
              <Image height={40} width={40} src="facebook.svg" alt="" />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/VanDusenGdn" target="_blank">
              <Image height={40} width={40} src="twitter.svg" alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
