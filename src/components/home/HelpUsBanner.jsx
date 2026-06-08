import { Icon } from "@iconify/react";
import Button from "../Button";

const services = [
  {
    id: 1,
    title: "Donator",
    desc: "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    icon: "clarity:dollar-bill-solid",
  },
  {
    id: 2,
    title: "Funrising",
    desc: "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    icon: "mdi:bank",
  },
  {
    id: 3,
    title: "Volunteer",
    desc: "Lorem ipsum dolor sit amet, risus adipiscing elit. Praesent laoreet condimentum quam, sit amet congue risus lobortis quis.",
    icon: "bxs:donate-heart",
  },
];
export default function HelpUsBanner() {
  return (
    <section className="bg-[url('/images/home/banner/baby-playing.webp')] bg-cover bg-center h-160 lg:h-125 mt-16 text-white grid place-items-center">
      <div className="container">
        <div>
          <h2 className="text-center font-bold text-[56px]">
            HOW CAN YOU HELP US?
          </h2>
          <p className="font-semibold">
            Empowering communities across Bangladesh through education,
            healthcare, and sustainable development.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {services.map((service) => (
            <div key={service.id} className="flex items-start gap-4">
              <div className="border p-5.5">
                <Icon icon={service.icon} width="40" height="40" />
              </div>
              <div>
                <h3 className="font-medium text-2xl">{service.title}</h3>
                <p className="text-justify text-[13px] mb-6.5">{service.desc}</p>
                <Button type="outline" size="small">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
