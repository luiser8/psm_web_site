import React, { useMemo } from "react";
//import Image from "next/image";
//import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Carousel from "./Layout/Carousel";

const Institution = ({
  listTypes = [
    {
      name: "Estudiantes",
      number: "5390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Sedes",
      number: "12",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Tecnología",
      number: "5",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen mt-16 px-0 xl:px-0 mx-auto"
      id="institution"
    >
      <ScrollAnimationWrapper>
      <motion.div className="h-full w-full" variants={scrollAnimation}>
        <Carousel />
      </motion.div>
            {/* <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-100 leading-normal">
              Instituto Universitario Politécnico Santiago Mariño
              </h1>
              <p className="text-black-100 mt-4 mb-6">
              Somos una institución de educación superior de carácter privado sin fines de lucro, que cumple las funciones de docencia, investigación y extensión, dirigidas a formar arquitectos e ingenieros capaces de incorporarse al proceso de desarrollo del país. Nuestra organización forma parte de una red de institutos y colegios de educación superior denominada Complejo Educativo “Antonio José de Sucre”. Nuestro lema es Formación para la Excelencia.
              </p>
              <ButtonPrimary>Más información</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  src="/assets/Home1.png"
                  alt="VPN Illustrasi"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div> */}
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        {/* <ScrollAnimationWrapper
          className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 sm:grid-cols-3 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500 z-10">
          {listTypes.map((list, index) => (
            <motion.div
              className="flex items-center justify-start sm:justify-center py-4 sm:py-6 w-8/12 px-4 sm:w-auto mx-auto sm:mx-0"
              key={index}
              custom={{duration: 2 + index}}
              variants={scrollAnimation}
            >
              <div className="flex mx-auto w-40 sm:w-auto">
                <div className="flex items-center justify-center bg-orange-50 w-12 h-12 mr-6 rounded-full">
                  <img src={list.icon} className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <p className="text-xl text-black-100 font-bold">
                    {list.number}+
                  </p>
                  <p className="text-lg text-black-100">{list.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
       </ScrollAnimationWrapper> */}
       <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
       ></div>
      </div>
    </div>
  );
};

export default Institution;
