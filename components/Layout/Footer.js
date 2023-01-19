import React from "react";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screens w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <img className="h-10 w-auto mb-6" src="/assets/Logo.png" alt="" />
          <p className="mb-4">
            <strong className="font-medium">Politécnico Santiago Mariño</strong> le ofrece la oportunidad de graduarse en alguna de las siguientes áreas: Arquitectura, Ingeniería Civil, Eléctrica, Electrónica, Industrial, Mantenimiento mecánico, Sistemas, Diseño industrial, Química entre otras
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-600">©{new Date().getFullYear()} - Politécnico Santiago Mariño</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black-100 mb-4 font-medium text-lg">Más carreras</p>
          <ul className="text-black-100 ">
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería Industrial{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería en Mantenimiento Mecánico{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería de Sistemas{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería de Diseño Industrial{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería Química{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería de Petróleos{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
            Ingeniería Agronómica{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black-600 mb-4 font-medium text-lg">Pólizas de seguro</p>
          <ul className="text-black-100">
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
              Accidentes personales{" "}
            </li>
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
              Programa de culminación de estudios{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black-100 mb-4 font-medium text-lg">Programas de orientación</p>
          <ul className="text-black-100">
            <li className="my-2 hover:text-orange-400 cursor-pointer transition-all">
              Académica, Vocacional y Psicológica{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
