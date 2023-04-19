import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Carousel from "../../components/Layout/Carousel";
import Image from "next/image";
import institucionMock from "../../utils/mocks/institucionMock";

const Institucion = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <>
      <div
        className="max-w-screen mt-16 px-0 xl:px-0 mx-auto"
        id="institution"
      >
        <ScrollAnimationWrapper>
          <motion.div className="h-full w-full" variants={scrollAnimation}>
            <Carousel images={institucionMock[0].carousel} />
          </motion.div>
        </ScrollAnimationWrapper>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
      <div className="max-w-screen mt-6 mb-14 sm:mt-10 sm:mb-10 px-6 sm:px-8 lg:px-16 mx-auto">
        <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 y-8 my-16">
          <ScrollAnimationWrapper className="flex w-full justify-end">
            <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
              <Image
                src={institucionMock[0].image}
                alt="Academy"
                layout="responsive"
                quality={100}
                height={414}
                width={508}
                objectFit="contain"
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
              <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-100">
                {institucionMock[0].title}
              </h3>
              <p className="my-2 text-black-100">
                {institucionMock[0].description}
              </p>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </>
  );
};

export default Institucion;
