"use client"; // this is a client component
import Image from "next/image";
import React, { useEffect, useState } from "react";
//import SliderData from "@/components/SliderData.json";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

import { type IGalleryPicture } from "../types";

//const slides: IGalleryPicture[] = SliderData as IGalleryPicture[];

const Slider = ({ slides, onSlideLegendChange }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  useEffect(() => {
    onSlideLegendChange(slides[current].pictureLegend);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return <div>no slides !</div>;
  }

  return (
    <div id="gallery" className="w-full h-30vh" style={{ height: "70vh" }}>
      <div className="relative flex justify-center items-center h-full">
        {slides.map((slide, index) => {
          const slideClass =
            current === index ? "slide-current" : "slide-hidden";
          const slidePosition =
            current === index ? 0 : (current - index) * -100;

          return (
            <div
              key={index}
              className={`absolute top-0 left-0 h-full w-full transition-transform duration-1000 ${slideClass}`}
              style={{ transform: `translateX(${slidePosition}%)` }}
            >
              <FiArrowLeft
                onClick={prevSlide}
                className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white"
                size={80}
              />
              <FiArrowRight
                onClick={nextSlide}
                className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white"
                size={80}
              />
              <Link
                href={slide.picturePath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={slide.picturePath}
                  alt={slide.alt}
                  width={slide.width}
                  height={slide.height}
                  placeholder="blur"
                  blurDataURL="/images/loader.gif"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
