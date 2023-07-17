import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import ImagesCarousel from "./ImagesCarousel";
import ModalIframe from "./ModalIframe";

export default function Carousel({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentImages, setCurrentImages] = useState(images);
  const [open, setOpen] = useState(false);
  const [iframe, setIframe] = useState("");

  const handleNextSlide = () => {
    let newSlide = currentSlide === currentImages.length - 1 ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const handlePrevSlide = () => {
    let newSlide = currentSlide === 0 ? currentImages.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  const handleStopSlide = (iframe, index) => {
    if(iframe !== ""){
      setOpen(true);
      setIframe(iframe);
      const newImages = currentImages.filter(x => x.id === index);
      setCurrentImages([...currentImages, ...newImages]);
    }
  };

  useEffect(() => {
    const interval = setTimeout(() =>
      setCurrentSlide((current) =>
        current === currentImages.length - 1 ? 0 : current + 1), 10000
      );
    return () => {
      clearTimeout(interval);
    };
  }, [currentSlide]);

  return (
    <div className="relative">
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="backdrop-opacity-10 backdrop-invert bg-white/30 absolute px-1 py-1 left-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-500 z-20 rounded-full bg-opacity-50 border-1 border-black-100 bg-black-900"
      />
      <ImagesCarousel images={currentImages} currentSlide={currentSlide} handleNextSlide={handleNextSlide} handlePrevSlide={handlePrevSlide} handleStopSlide={handleStopSlide} />
      <AiOutlineRight
        onClick={handleNextSlide}
        className="backdrop-opacity-10 backdrop-invert bg-white/30 absolute px-1 py-1 right-0 m-auto text-4xl inset-y-1/2 cursor-pointer text-gray-500 z-20 rounded-full bg-opacity-50 border-1 border-black-100 bg-black-900"
      />
      {open ? <ModalIframe url={iframe} /> : <></>}
    </div>
  );
}
