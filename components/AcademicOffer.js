import React, { useState, useMemo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const AcademicOffer = ({
  listCarreras = [
    {
      name: "Arquitectura",
      image: "/assets/carreras/arquitectura-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería Civil",
      image: "/assets/carreras/civil-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería Eléctrica",
      image: "/assets/carreras/electrica-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería Industrial",
      image: "/assets/carreras/industrial-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería en Mantenimiento Mecánico",
      image: "/assets/carreras/mantenimiento-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería de Sistemas",
      image: "/assets/carreras/sistemas-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería de Diseño Industrial",
      image: "/assets/carreras/diseno-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería Química",
      image: "/assets/carreras/quimica-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería de Petróleos",
      image: "/assets/carreras/petroleo-large.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
    {
      name: "Ingeniería Agronómica",
      image: "/assets/carreras/agronomica.jpg",
      description:
        "Encargado de atender directamente a los pacientes y de difundir campañas informativas sobre las principales enfermedades que afectan en la actualidad a nuestra sociedad.",
    },
  ],
}) => {
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
    <div className="w-full py-12 mb-16 bg-gradient-to-b from-white-300 to-white-500" id="academy">
      {/* bg-gradient-to-b from-white-300 to-white-500  */}
      <div className="max-w-screen py-12 px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
        <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-100 leading-relaxed"
            >
              Carreras
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              Carreras que ofrece nuestra Institución.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
          <Slider
            {...settings}
            arrows={false}
            ref={setSliderRef}
            className="flex items-stretch justify-items-stretch"
          >
            {listCarreras.map((listCarreras, index) => (
              <div className="p-4 md:w-1/3" key={index}>
                <div className="h-full border-2 border-gray-500 rounded-lg overflow-hidde hover:border-orange-400 transition-all">
                  <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={listCarreras.image} alt="blog" />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{listCarreras.name}</h1>
                    <p className="leading-relaxed mb-3">{listCarreras.description}</p>
                    <div className="flex items-center flex-wrap ">
                      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Más detalles
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
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

export default AcademicOffer;
