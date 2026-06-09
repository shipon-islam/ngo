"use client"
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";
export default function OurSponsor() {
  return (
    <section className='my-16 container'>
        <CommonHeading text="OUR" redText="SPONSORS" center={true}/>
        <div className="relative mt-8">
        <Swiper
          modules={[FreeMode, Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          loop={true}
          spaceBetween={10}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          pagination={false}
          freeMode={true}
          speed={4000}
          breakpoints={{
            // When window width is >= 1024px
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1280: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            // When window width is >= 1280px
            1536: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {Array.from({length:10}).map((_, index) => (
            <SwiperSlide key={index}>
              <div className="bg-black w-full h-22">
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
