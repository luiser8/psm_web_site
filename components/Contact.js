import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Contact = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-12 mb-6"
      id="contact"
    >
      <div className="max-w-screen  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full" id="contact">
          <ScrollAnimationWrapper className="flex justify-center relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <iframe width="1380" height="720" scrolling="no" src="https://maps.google.es/maps/ms?ie=UTF8&amp;hl=es-419&amp;oe=UTF8&amp;msa=0&amp;msid=202280427449831017393.0004ccaf6e66638aecf2c&amp;t=m&amp;ll=8.733077,-67.214355&amp;spn=10.410586,14.0625&amp;z=6&amp;output=embed"></iframe>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Contact;
