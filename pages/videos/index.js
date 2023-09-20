import React, { useState, useMemo } from "react";
import Link from "next/link";
import Slider from "react-slick";
//import Image from "next/image";
import { motion } from "framer-motion";
import ArrowBack from "../../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../../public/assets/Icon/eva_arrow-next-fill.svg";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import videosMock from "../../utils/mocks/videosMock.js";

const Videos = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="bg-orange-800 mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplaySpeed: 4000,
    autoplay: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div className="w-full py-12 mb-16 bg-gradient-to-b from-white-300 to-white-500" id="eventos">
      {/* bg-gradient-to-b from-white-300 to-white-500  */}
      <div className="max-w-screen py-12 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          {/* <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed"
            >
              Videos
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Algunas reseñas.
            </motion.p>
          </ScrollAnimationWrapper> */}
          <ScrollAnimationWrapper>
            <Slider
              {...settings}
              arrows={false}
              ref={setSliderRef}
              className="flex items-stretch justify-items-stretch"
            >
              {videosMock.map((videosMock, index) => (
                <div className="p-4 md:w-1/3" key={index}>
                  <div className="h-full border-2 border-gray-500 rounded-lg overflow-hidden hover:border-orange-400 transition-all">
                    {/* <img className="lg:h-full md:h-full w-full object-cover object-center" src={videosMock.video} alt="image" /> */}
                    <video src={videosMock.video} autoplay controls controlsList="nodownload noplaybackrate" disablePictureInPicture></video>
                    <div className="p-6">
                      {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{videosMock.name}</h1> */}
                      <p className="leading-relaxed mb-3">"{videosMock.description}"</p>
                      <p className="leading-relaxed mb-0 text-gray-700 underline">{videosMock.att}</p>
                      <p className="leading-relaxed mb-0 text-gray-700 underline">{videosMock.post}</p>
                      {/* <div className="flex items-center flex-wrap">
                      <Link href={`/eventos/${eventosMock.detail}`} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        <div className="mx-auto">
                          <a className="cursor-pointer">Más detalles</a>
                          <svg className="w-4 h-4 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </div>
                      </Link>
                    </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <div className="flex w-full items-center justify-end">
              <div className="flex flex-none justify-between w-auto mt-14">
                <div
                  className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-400 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-400 cursor-pointer"
                  onClick={sliderRef?.slickPrev}
                >
                  <ArrowBack className="h-6 w-6 " />
                </div>
                <div
                  className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-orange-400 border hover:bg-orange-500 hover:text-white-500 transition-all text-orange-400 cursor-pointer"
                  onClick={sliderRef?.slickNext}
                >
                  <ArrowNext className="h-6 w-6" />
                </div>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Videos;
