"use client"
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CommonHeading from "../CommonHeading";
import { Arrow } from "../Icon";
const testimonials = [
  {
    id: 1,
    name: "Zafari Jamal",
    position: "Director1",
    review:
      "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    image: "",
  },
  {
    id: 2,
    name: "Zafari Jamal",
    position: "Director2",
    review:
      "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    image: "",
  },
  {
    id: 3,
    name: "Zafari Jamal",
    position: "Director3",
    review:
      "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    image: "",
  },
  {
    id: 4,
    name: "Zafari Jamal",
    position: "Director4",
    review:
      "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    image: "",
  },
];
export default function OurPeopleSays() {
  return (
    <section>
      <CommonHeading text="What" redText="PEOPLE SAYS" center={true} />
      <div className="bg-black text-white min-h-125 mt-8">
        <div className="container py-20">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={false}
            navigation={{
              nextEl: ".custom-next2",
              prevEl: ".custom-prev2",
            }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="relative">
                  <div className="max-w-188.75 mx-auto">
                    <div className="size-35 bg-gray rounded-full mx-auto"></div>
                    <hr className="my-8 w-[80%] mx-auto" />
                    <div className="text-center">
                      <p>{testimonial.review}</p>
                      <h2 className="my-8 font-semibold text-4xl">
                        {testimonial.name}
                      </h2>
                      <p className="font-semibold">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
                    <button className="custom-prev2">
                      <Arrow className="size-14 rotate-180" />
                    </button>
                    <button className="custom-next2">
                      <Arrow className="size-14" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
