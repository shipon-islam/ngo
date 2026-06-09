"use client";
import Image from "next/image";
import {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../Button";
import { Arrow } from "../Icon";
const slideItems = [
  "/images/home/hero/ngo-family.webp",
  "/images/home/hero/ngo-family.webp",
  "/images/home/hero/ngo-family.webp",
];
export default function Hero() {
  return (
    <section className="relative h-[80vh] sm:h-screen flex flex-col  justify-center">
      <div className="absolute inset-0">     
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Thumbs]}
        slidesPerView={1}
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={false}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="fade"
        speed={1000}
         className="mySwiper2 h-full"
      >
        {slideItems.map((item, id) => (
          <SwiperSlide key={id} className="relative">
            {/* <div
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${item})`,
              }}
              className="bg-cover grayscale bg-center absolute inset-0"
            /> */}
            <Image src={item} width={2000} height={200} alt="banner" className="h-full w-full object-cover grayscale"/>
            <div className="w-full h-full absolute top-0 left-0 bg-black/30"></div>
          </SwiperSlide>
        ))}
      </Swiper>
 </div>
      <div className="relative z-10 container  text-white flex justify-between items-center">
        <div className="max-w-155.25">
          <h5 className="bg-red text-xl sm:text-2xl font-medium  w-fit px-5 py-2.5 rounded-[20px]">
            BD Serving Bangladesh Since 2005
          </h5>
          <h1 className="text-4xl sm:text-[56px] font-bold my-8 leading-[120%] sm:leading-[180%]">
            We Can Help <br /> Build a Better Tomorrow
          </h1>
          <p className="font-semibold ">
            Empowering communities across Bangladesh through education,
            healthcare, and sustainable development.
          </p>
          <div className="hidden sm:flex items-center gap-4 mt-8.5">
            <Button >Donate</Button>
            <Button type="outline">View Our Projects</Button>
          </div>
          <div className="flex sm:hidden items-center gap-4 mt-8.5">
            <Button size="small" >Donate</Button>
            <Button size="small" type="outline">View Our Projects</Button>
          </div>
        </div>
        <div className=" items-center gap-4 hidden sm:flex">
          <button className="custom-prev rotate-180 border size-15 flex items-center justify-center rounded-full hover:text-red-500">
            <Arrow />
          </button>
          <button className="custom-next border size-15 flex items-center justify-center rounded-full hover:text-red-500">
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
