"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const LogoCarousel: React.FC = () => {
  return (
    <>
      <div
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
      </div>
    </>
  );
};

export default LogoCarousel;
