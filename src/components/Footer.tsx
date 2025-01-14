import Image from "next/image";
import React from "react";

export const Footer = () => {
  return (
    <div className="bg-black h-[40vh] text-white flex items-center">
      <footer className="px-20">
        <h1 className="text-3xl mb-3">VanDusen Botanical Garden</h1>
        <div className="flex items-center gap-x-3 mb-3">
          <Image height={35} width={35} src="phone.svg" alt="" />
          <p className="text-xl">+1 236 789 101</p>
        </div>
        <div className="flex items-center gap-x-3 mb-5">
          <Image height={35} width={35} src="email.svg" alt="" />
          <p className="text-xl">vandusen@contact.com</p>
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
