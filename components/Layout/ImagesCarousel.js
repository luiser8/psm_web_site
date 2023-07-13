import { useState, useEffect } from "react";
import BackDrop from "./BackDrop";
import Swipe from "react-easy-swipe";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ScrollAnimationWrapper from "./ScrollAnimationWrapper";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

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
        <div className="w-full h-[65vh] flex overflow-hidden relative m-auto">
            <Swipe
                onSwipeLeft={handleNextSlide}
                onSwipeRight={handlePrevSlide}
                className="relative z-10 w-full h-auto"
            >
                {loading && <BackDrop position_dad="absolute" />}
                {images.map((image, index) => {
                    if (index === currentSlide) {
                        return (
                            // <a href={image.link} target={image.target}>
                            //     <img
                            //         key={index}
                            //         src={image.url}
                            //         layout="fill"
                            //         className="h-auto w-auto transition-all"
                            //         alt="Image for carousel"
                            //     />
                            // </a>
                            <ScrollAnimationWrapper>
                                <motion.div className="h-full w-full">
                                    <Link key={image.link} legacyBehavior passHref href={image.link} target={image.target}>
                                        <a title={image.titleLink} target={image.target} rel="noopener noreferrer" className={`${image.link === "" ? 'cursor-default' : 'cursor-pointer'}`}>
                                            <Image
                                                src={image.url}
                                                height={660}
                                                width={1920}
                                                alt="Carousel"
                                                layout="responsive"
                                                quality={100}
                                                objectFit="contain"
                                                className="h-auto w-auto transition-all"
                                            />
                                        </a>
                                    </Link>
                                </motion.div>
                            </ScrollAnimationWrapper>
                        );
                    }
                })}
            </Swipe>
        </div>
    );
}
export default ImagesCarousel;