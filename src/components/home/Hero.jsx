import Button from "../Button";
import { Arrow } from "../Icon";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col  justify-center">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/home/hero/ngo-family.webp')",
        }}
        className="bg-cover grayscale bg-center absolute inset-0"
      />

      <div className="relative z-10 container  text-white flex justify-between items-center">
        <div className="max-w-155.25">
          <h5 className="bg-red text-2xl font-medium  w-fit px-5 py-2.5 rounded-[20px]">
            BD Serving Bangladesh Since 2005
          </h5>
          <h1 className="text-[56px] font-bold my-8 leading-[180%]">
            We Can Help <br /> Build a Better Tomorrow
          </h1>
          <p className="font-semibold ">
            Empowering communities across Bangladesh through education,
            healthcare, and sustainable development.
          </p>
          <div className="flex items-center gap-4 mt-8.5">
            <Button>Donate</Button>
            <Button type="outline">View Our Projects</Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="rotate-180 border size-15 flex items-center justify-center rounded-full hover:text-red-500">
            <Arrow />
          </button>
          <button className=" border size-15 flex items-center justify-center rounded-full hover:text-red-500">
            <Arrow />
          </button>
        </div>
      </div>
    </section>
  );
}
