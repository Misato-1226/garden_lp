"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react"; // Swiper コンポーネントをインポート
import { Autoplay } from "swiper/modules"; // Autoplay モジュールをインポート
import "swiper/css"; // Swiper のスタイル
import "swiper/css/autoplay"; // 自動再生用のスタイル

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
    <div className="h-screen">
      <h1 className="text-white text-4xl font-bold">
        VanDusen Botanical Garden
      </h1>
      <Swiper
        modules={[Autoplay]} // 自動再生モジュールを使用
        autoplay={{ delay: 5000, disableOnInteraction: false }} // 自動再生設定
        loop={true} // 無限ループ
        className="h-screen"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="h-full flex items-center justify-center">
              <Image
                src={slide.imagePath}
                height={0}
                width={0}
                alt="Welcome to VanDusen Botanical Garden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
