import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../../utils/getScrollAnimation";
import ScrollAnimationWrapper from "../../components/Layout/ScrollAnimationWrapper";
import Link from "next/link";

const Saia = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen py-12 mb-12 sm:mt-10 sm:mb-10 px-6 sm:px-8 lg:px-16 mx-auto"
      id="saia"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 y-16 my-16">
        <ScrollAnimationWrapper>
          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-100">
              La Educación a distancia es una modalidad de enseñanza y aprendizaje cuya característica principal es la separación física de los participantes y facilitadores.
            </h3>
            <p className="mt-8 text-black-100">
              S.A.I.A., está fundamentado en las ventajas que ofrece la educación en línea a través de las redes de computadoras, haciendo uso constante de las facilidades que ofrece Internet y otras tecnologías, lográndose así un ambiente educativo altamente colaborativo e interactivo donde el estudiante es el responsable de su ritmo de aprendizaje, estableciendo él mismo un horario a su conveniencia y sobre todo permitiéndole el acceso a una mayor cantidad de información actualizada y precisa en cualquier parte del mundo; lo que se traduce en el mejoramiento continuo en la calidad de la educación ofrecida por la Institución.
            </p>
            {/* <ul className="text-black-500 self-start list-inside ml-8">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list"
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul> */}
            <div className="col-end-10 col-start-12 font-medium flex justify-start items-center mt-28">
              <Link href="/saia/detalle">
                {/* href="https://saia2.psm.edu.ve" target="_blank" */}
                <a className="text-black-100 mx-2 sm:mx-4 tracking-wide hover:text-orange-400 transition-all">
                  Más detalles
                </a>
              </Link>
            </div>
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/saia/saia_home.png"
              alt="Academy"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
              objectFit="contain"
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Saia;
