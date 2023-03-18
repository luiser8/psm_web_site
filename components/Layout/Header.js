import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Link as LinkScroll } from "react-scroll";
//import ButtonOutline from "../misc/ButtonOutline.";

const Header = () => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("institution");
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
    return () => { setScrollActive(false); };
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-0")
        }
      >
        <nav className="max-w-screen px-8 sm:px-8 lg:px-8 mx-auto py-3 sm:py-4">
          <ul className="hidden lg:flex col-start-4 col-end-8 text-black-100 items-center">
            {router.pathname === "/" ? (
              <>
                <LinkScroll
                  activeClass="active"
                  to="institution"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("institution");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "institution"
                      ? " text-orange-400 animation-active font-medium "
                      : " text-black-100 hover:text-orange-400 a")
                  }
                >
                  La Institución
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="carreras"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("carreras");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "carreras"
                      ? " text-orange-400 animation-active font-medium "
                      : " text-black-100 hover:text-orange-400 a")
                  }
                >
                  Carreras
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="saia"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("saia");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "saia"
                      ? " text-orange-400 animation-active font-medium "
                      : " text-black-100 hover:text-orange-400 a")
                  }
                >
                  Educación a distancia
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="student_services"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("student_services");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "student_services"
                      ? " text-orange-400 animation-active font-medium "
                      : " text-black-100 hover:text-orange-400 a")
                  }
                >
                  Servicios
                </LinkScroll>
                <LinkScroll
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={1000}
                  onSetActive={() => {
                    setActiveLink("contact");
                  }}
                  className={
                    "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                    (activeLink === "contact"
                      ? " text-orange-400 animation-active font-medium "
                      : " text-black-100 hover:text-orange-400 a")
                  }
                >
                  Contáctenos
                </LinkScroll>
              </>
            ) : (
              <Link href="/" className={"px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-orange-400 animation-active font-medium"}>Volver</Link>
            )}


          </ul>
          {/* <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <Link href="/">
              <a className="text-black-100 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-400 transition-all">
                  Registrarse
              </a>
            </Link>
            <ButtonOutline>Iniciar</ButtonOutline>
          </div> */}
        </nav>
      </header>
      {/* Mobile Navigation */}

      {/*<nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-100 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-100">
            <LinkScroll
              activeClass="active"
              to="institution"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("institution");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "institution"
                  ? " border-orange-400 text-orange-400"
                  : " border-transparent")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              La Institución
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="academy"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("academy");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "academy"
                  ? "  border-orange-400 text-orange-400"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Oferta Académica
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="student_services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("student_services");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "student_services"
                  ? "  border-orange-400 text-orange-400"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Servicios Estudiantiles
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="testimoni"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("testimoni");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-400 text-orange-400"
                  : " border-transparent ")
              }
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Contáctenos
            </LinkScroll>
          </ul>
        </div>
      </nav>*/}
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;
