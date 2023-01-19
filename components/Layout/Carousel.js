import { useEffect } from "react";
import Image from "next/image";
import { useState } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    {
      id: 0,
      url: '/assets/web1-min.png',
      cloudinary: "https://res.cloudinary.com/luiser85/image/upload/v1674132064/web1_n55v2c.png",
    },
    {
      id: 1,
      url: '/assets/web2-min.png',
      cloudinary: "https://res.cloudinary.com/luiser85/image/upload/v1674132079/web2_tnekov.png",
    },
    {
      id: 2,
      url: '/assets/web3-min.png',
      cloudinary: "https://res.cloudinary.com/luiser85/image/upload/v1674132071/web3_wrf39j.png",
    },
  ];

  const handleNextSlide = () => {
    let newSlide = currentSlide === images.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const interval = setTimeout(() =>
        setCurrentSlide((current) =>
        current === images.length - 1 ? 0 : current + 1), 10000);
    return () => {
      clearTimeout(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="backdrop-opacity-10 backdrop-invert bg-white/30 absolute px-1 py-1 left-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-500 z-20 rounded-full bg-opacity-50 border-1 border-black-100 bg-black-900"
      />

      <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="relative z-10 w-full h-auto"
        >
          {images.map((image, index) => {
            if (index === currentSlide) {
              return (
                  <img
                    key={index}
                    src={image.url}
                    layout="fill"
                    className="h-auto w-auto transition-all"
                    objectFit="none"
                    quality={100}
                    alt="Image for carousel"
                  />
              );
            }
          })}
        </Swipe>
      </div>
      <AiOutlineRight
        onClick={handleNextSlide}
        className="backdrop-opacity-10 backdrop-invert bg-white/30 absolute px-1 py-1 right-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-500 z-20 rounded-full bg-opacity-50 border-1 border-black-100 bg-black-900"
      />

      {/* <div className="relative flex justify-center">
            {images.map((_, index) => {
              return (
                <div
                  className={
                    index === currentSlide
                      ? "h-4 w-4 bg-gray-700 rounded-full mx-2 mb-2 cursor-pointer"
                      : "h-4 w-4 bg-gray-300 rounded-full mx-2 mb-2 cursor-pointer"
                  }
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                  }}
                />
              );
            })}
          </div> */}
    </div>
  );
}