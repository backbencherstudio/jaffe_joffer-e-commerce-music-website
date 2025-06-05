"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CustomSliderProps {
  slides: React.ReactNode[];
  sliderId: string; // Required for unique pagination class
  bulletColor?: string;
  activeBulletBorder?: string;
  activeBulletFill?: string;
}

export default function CustomSlider({
  slides,
  sliderId,
  bulletColor = "#6c6c6c",
  activeBulletBorder = "#000000",
  activeBulletFill = "#6c6c6c",
}: CustomSliderProps) {
  const paginationClass = `custom-swiper-pagination-${sliderId}`;

  return (
    <div className="w-full flex flex-col items-center">
      {/* Slide Content */}
      <div className="w-full max-w-[1200px] rounded-[48px] overflow-hidden mt-12">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
            el: `.${paginationClass}`,
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              {slide}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* External Pagination Bullets */}
      <div
        className={`${paginationClass} mt-5 flex justify-center items-center gap-3`}
      ></div>

      {/* Dynamic Bullet Styles */}
      <style jsx global>{`
        .${paginationClass} .swiper-pagination-bullet {
          cursor: pointer;
          width: 18px;
          height: 18px;
          background-color: ${bulletColor};
          border-radius: 9999px;
          opacity: 1;
          position: relative;
          z-index: 1;
          margin-left: 10px;
          margin-right: 10px;
        }

        .${paginationClass} .swiper-pagination-bullet-active::before {
          content: "";
          position: absolute;
          top: -7px;
          left: -7px;
          width: 32px;
          height: 32px;
          border: 2px solid ${activeBulletBorder};
          border-radius: 50%;
          background: transparent;
          z-index: -1;
        }

        .${paginationClass} .swiper-pagination-bullet-active {
          background-color: ${activeBulletFill};
        }
      `}</style>
    </div>
  );
}
// This component is a reusable slider that can be used across different sections of the website.
  