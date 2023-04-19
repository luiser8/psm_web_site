import { useState, useEffect } from "react";
import BackDrop from "./BackDrop";
import Swipe from "react-easy-swipe";

function ImagesCarousel({ images, currentSlide, handleNextSlide, handlePrevSlide }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (images.length !== 0) {
            setLoading(false);
        }
        return () => {
            setLoading(true);
        }
    }, []);

    return (
        <div className="w-full h-[50vh] flex overflow-hidden relative m-auto">
            <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="relative z-10 w-full h-auto"
            >
                {loading && <BackDrop position_dad="absolute" />}
                {images.map((image, index) => {
                    if (index === currentSlide) {
                        return (
                            <img
                                key={index}
                                src={image.url}
                                layout="fill"
                                className="h-auto w-auto transition-all"
                                alt="Image for carousel"
                            />
                        );
                    }
                })}
            </Swipe>
        </div>
    );
}
export default ImagesCarousel;