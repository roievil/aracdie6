import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

import Link from "next/link";

import { IGallerySlide } from "../types";

const Slider = ({ slides, onSlideLegendChange }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = (): void => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = (): void => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const handleBulletClick = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    onSlideLegendChange(slides[current].slideLegend);
  }, [current]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return <div>no slides!</div>;
  }

  return (
    <div id="gallery" className="w-full h-30vh" style={{ height: "70vh" }}>
      <div className="relative flex justify-center items-center h-full">
        {slides.map((slide, index) => {
          const isPictureSlide = slide.type === "picture";
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
              {isPictureSlide ? (
                <Link
                  href={slide.slidePath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={slide.slidePath}
                    alt={slide.alt}
                    width={slide.width}
                    height={slide.height}
                    placeholder="blur"
                    blurDataURL="/images/loader.gif"
                  />
                </Link>
              ) : (
                <div className="relative flex justify-center items-center">
                  {/* Adjust the values here */}
                  <ReactPlayer
                    url={slide.slidePath}
                    type="video/mp4"
                    width={slide.width}
                    height={slide.height}
                    controls
                    playing={current === index}
                  />
                </div>
              )}
            </div>
          );
        })}

        {/* Bullet overlay */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => handleBulletClick(index)}
              className={`w-2 h-2 rounded-full ${
                current === index
                  ? "bg-white border-2 border-black" // Active bullet color
                  : "bg-black border-2 border-white" // Inactive bullet color
              }`}
            ></button>
          ))}
        </div>

        {/* Arrows */}
        <div className="absolute top-1/2 left-5 transform -translate-y-1/2">
          <img
            src="/images/icons/Antu_arrow-left.svg"
            alt="Left Arrow"
            onClick={prevSlide}
            className="cursor-pointer w-12 h-12"
          />
        </div>
        <div className="absolute top-1/2 right-5 transform -translate-y-1/2">
          <img
            src="/images/icons/Antu_arrow-right.svg"
            alt="Right Arrow"
            onClick={nextSlide}
            className="cursor-pointer w-12 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
