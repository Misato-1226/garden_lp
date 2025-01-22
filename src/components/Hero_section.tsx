"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper コンポーネントをインポート
import { Autoplay, EffectFade } from "swiper/modules"; // Autoplay モジュールをインポート
import "swiper/css"; // Swiper のスタイル
import "swiper/css/autoplay"; // 自動再生用のスタイル
import "swiper/css/effect-fade";
import Link from "next/link";

export const Hero_section = () => {
  const slides = [
    {
      id: 1,
      imagePath: "/slide1.jpg",
    },
    { id: 2, imagePath: "/slide2.jpg" },
    { id: 3, imagePath: "/slide3.jpg" },
  ];

  return (
    <div className="md:h-screen h-[80vh] relative">
      <Swiper
        modules={[Autoplay, EffectFade]} // 自動再生モジュールを使用
        autoplay={{ delay: 5000 }} // 自動再生設定
        loop={true} // 無限ループ
        effect={"fade"}
        speed={5000}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full flex items-center justify-center ">
              <Image
                src={slide.imagePath}
                height={100}
                width={1000}
                className="h-full w-full object-cover"
                alt="Welcome to VanDusen Botanical Garden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* swiper.jsの仕様上、z-indexは10以上に設定しないと上に表示されない。 */}
      <div className="absolute bottom-3/4 left-1/2 transform -translate-x-1/2 z-10">
        <h1 className="text-white text-xl md:text-2xl lg:text-4xl font-bold shadow-md font-roboto">
          VanDusen Botanical Garden
        </h1>
      </div>
      <div className="absolute top-64 left-1/2 transform -translate-x-1/2 z-10">
        <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-monteCarlo">
          Festival of Lights
        </h2>
      </div>
      <div className="absolute bottom-48 left-1/2 transform -translate-x-1/2 z-10 flex justify-center">
        <Link href="/payment">
          <button className="text-white text-md lg:text-xl font-bold bg-red-600 border-4 border-white px-4 lg:px-8 py-2 lg:py-4 rounded-2xl ">
            Get Tickets Now
          </button>
        </Link>
      </div>
    </div>
  );
};
