export default function AboutHero() {
  return (
    <section>
      <div className="bg-[radial-gradient(circle_at_center,#2f855a_0%,#166534_50%,#052e16_100%)] h-160 w-full text-white relative overflow-hidden">
        <svg
          className="absolute -bottom-1 left-0 w-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="white"
            d="M0,100 C360,0 1080,0 1440,100 L1440,200 L0,200 Z"
          />
        </svg>
        <div className="pt-50 container">
          <div className="max-w-236.5">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
              Education is the <span className="text-red">greatest</span>{" "}
              equalizer.
            </h2>
            <p className="mt-8">
              We are a non-profit organization dedicated to breaking the cycle
              of poverty through access to quality education for every child —
              regardless of where they are born.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="border-2 md:border-3 border-dotted border-deepgreen w-fit p-4 sm:p-8 md:p-10 lg:p-12.5 rounded-full">
          <div className="border-2 md:border-3 border-dotted border-deepgreen rounded-full p-4 sm:p-8 md:p-10 lg:p-12.5 w-fit relative">
            <div className="bg-darkgreen size-45 sm:size-80 md:size-120 lg:size-168  rounded-full text-white grid place-items-center">
              <div className="border border-red size-34 sm:size-60 md:size-85 lg:size-94 rounded-full text-center grid place-content-center">
                <h3 className="font-bold text-xl sm:text-7xl md:text-8xl lg:text-[120px]">15K+</h3>
                <p className="text-xs sm:text-sm md:text-xl lg:text-2xl font-medium mt-2.5">
                  Children Reached <br /> Annually
                </p>
              </div>
            </div>
            <span className="size-2 sm:size-3 bg-red rounded-full inline-block absolute -top-1.5 left-1/2 -translate-x-1/2" />
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1169"
          height="3"
          fill="none"
          className="mt-8 w-full"
          viewBox="0 0 1169 3"
        >
          <path
            stroke="url(#paint0_linear_119_165)"
            strokeWidth="3"
            d="M0 1.5h1169"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_119_165"
              x1="0"
              x2="1169"
              y1="3.5"
              y2="3.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#fff"></stop>
              <stop offset="0.452" stopColor="#C8102E"></stop>
              <stop offset="1" stopColor="#fff"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
