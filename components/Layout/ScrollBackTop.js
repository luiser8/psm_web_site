import React, { useEffect, useRef } from "react";

function ScrollBackTop({ setActiveLink }) {
    const btnRef = useRef(null);

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            btnRef.current.style.display = "block";
        } else {
            btnRef.current.style.display = "none";
        }
    }

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        setActiveLink("institution");
    }

    useEffect(() => {
        window.onscroll = function () {
            scrollFunction();
        };
    }, []);

    return (
        <button
            type="button"
            id="btn-back-to-top"
            ref={btnRef}
            onClick={backToTop}
            title="Ir al inicio"
            data-te-ripple-init
            data-te-ripple-color="light"
            className="fixed bottom-12 right-2 inline-block rounded-full bg-danger p-4 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#f58634] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-orange-400 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)]">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke-width="2.5"
                stroke="currentColor"
                className="h-4 w-4">
                <path
                    fill-rule="evenodd"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                    clip-rule="evenodd" />
            </svg>
        </button>
    )
}

export default ScrollBackTop;
