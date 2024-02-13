"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/images/brands/prop.jpg",
  "/images/brands/hp.jpg",
  "/images/brands/iprog.jpg",
  "/images/brands/fprog.jpg",

  // Add more logo URLs as needed
];

const WorkCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show center image plus 2 additional images on each side
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true, // Hide navigation buttons
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false, // Disable center mode on smaller screens
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-lg">
      <Slider {...settings}>
        {logos.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default WorkCarousel;
