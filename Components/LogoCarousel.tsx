"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const logos = [
  "/images/brands/2.png",
  "/images/brands/1.png",
  "/images/brands/7.png",
  "/images/brands/3.png",
  "/images/brands/4.png",
  "/images/brands/5.png",
  "/images/brands/6.png",
  // Add more logo URLs as needed
];

const LogoCarousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set autoplay speed (milliseconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index}>
            <Image src={logo} alt={`Logo ${index}`} height={150} width={150} />
          </div>
        ))}
      </Slider>
      {/* <div
        x-data="{}"
        x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
        className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/brands/1.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/2.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/3.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/4.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/5.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/6.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/7.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
        </ul>
        <ul
          x-ref="logos"
          className="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
        >
          <li>
            <Image
              src="/images/brands/1.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/2.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/3.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/4.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/5.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/6.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
          <li>
            <Image
              src="/images/brands/7.png"
              alt="Facebook"
              height={150}
              width={150}
            />
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default LogoCarousel;
