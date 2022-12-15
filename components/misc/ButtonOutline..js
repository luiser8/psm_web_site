import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 text-orange-900 bg-orange-50 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-100 hover:text-orange-900 transition-all">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
