import React from "react";
import Link from "next/link";
import footerMock from "../../utils/mocks/footerMock";

const Footer = () => {
  return (

    <footer className="bg-gradient-to-b from-white-300 to-white-500">
      <div className="max-w-screens w-full mx-auto">
        <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4 px-6 sm:px-8 lg:px-16">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{footerMock[0].name}</h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              {Object.keys(footerMock[0].elements).map((item, key) => (
                <li key={key} className="mb-4">
                  <Link href={`/${footerMock[0].link}/${footerMock[0].elements[item].link}`} replace>
                    <a className="hover:underline">{footerMock[0].elements[item].name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{footerMock[1].name}</h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              {Object.keys(footerMock[1].elements).map((item, key) => (
                <li key={key} className="mb-4">
                  <Link href={`/${footerMock[1].link}/${footerMock[1].elements[item].link}`}>
                    <a target="_blank" className="hover:underline">{footerMock[1].elements[item].name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{footerMock[2].name}</h2>
            <ul className="text-black-500 dark:text-black-400 font-medium">
              {Object.keys(footerMock[2].elements).map((item, key) => (
                <li key={key} className="mb-4">
                  <Link href={`/${footerMock[2].link}/${footerMock[2].elements[item].link}`}>
                    <a className="hover:underline">{footerMock[2].elements[item].name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{footerMock[3].name}</h2>
            <ul className="text-black-500 font-medium">
              {Object.keys(footerMock[3].elements).map((item, key) => (
                <li key={key} className="mb-4">
                  <Link href={`/${footerMock[3].link}/${footerMock[3].elements[item].link}`}>
                    <a className="hover:underline">{footerMock[3].elements[item].name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-6 md:flex md:items-center md:justify-between px-6 sm:px-8 lg:px-16">
          <span className="text-sm text-black-500 text-black-300 sm:text-center">©{new Date().getFullYear()} - {footerMock[4].name}
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            {Object.keys(footerMock[4].elements).map((item, key) => (
              <Link key={key} href={`${footerMock[4].elements[item].link}`}>
                <a target="_blank" alt={footerMock[4].elements[item].name} className="text-black-400 hover:text-gray-900 dark:hover:text-white">
                  {footerMock[4].elements[item].icon}
                  <span className="sr-only">{footerMock[4].elements[item].name}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
