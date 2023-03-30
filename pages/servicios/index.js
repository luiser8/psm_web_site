import React, { useMemo } from "react";
import Image from "next/image";
//import Testimoni from "./Testimoni";
//import ButtonPrimary from "./misc/ButtonPrimary";
//import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";

const Servicios = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-12 mb-6"
      id="student_services"
    >
      <div className="max-w-screen  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Servicios Estudiantiles
            </motion.h3>
            <motion.p className="leading-normal mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              El Instituto Universitario Politécnico "Santiago Mariño", ofrece al estudiante asistencia individual y colectiva, con el objetivo de satisfacer sus necesidades médico - odontológicas, deportivas, culturales, recreativas y de orientación.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-4 w-full px-8 mt-14" variants={scrollAnimation}>
              <Maps className="w-auto h-auto mx-auto" />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        {/* <div className="flex flex-col w-full" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Servicio Médico General
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              La institución cuenta con un consultorio medico dentro de sus instalaciones, totalmente equipado, donde podrás acudir cada vez que requieras atención médica, solo necesitas mostrar tu carnet que te identifica como alumno regular, sin ningún costo adicional.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col pt-2 pb-0">
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Testimonios
            </motion.h3>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
        </div> */}
      </div>
    </div>
  );
};

export default Servicios;
