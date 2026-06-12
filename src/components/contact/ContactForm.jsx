import { Icon } from "@iconify/react";
const categories = [
  "Volunteer",
  "Donating",
  "Partnership",
  "Media",
  "Programs",
  "Others",
];
const contactInfo = [
  {
    id: 1,
    name: "Address",
    value: "47 Dhanmondi Lake Road,Dhaka 1209, Bangladesh",
    href: "#",
    icon: "tdesign:location-filled",
  },
  {
    id: 2,
    name: "Phone",
    value: "+880 2 9112 3456",
    href: "tel:+880291123456",
    icon: "material-symbols:call",
  },
  {
    id: 3,
    name: "Email",
    value: "hello@brightpath.org.bd",
    href: "mailto:hello@brightpath.org.bd",
    icon: "ic:baseline-email",
  },
];
const officeHours = [
  {
    id: 1,
    name: "Sunday – Thursday",
    value: "9:00 AM – 5:00 PM",
  },
  {
    id: 2,
    name: "Friday",
    value: "Closed",
  },
  {
    id: 3,
    name: "Saturday",
    value: "10:00 AM – 2:00 PM",
  },
];
export default function ContactForm() {
  return (
    <section className="container">
      <div className="grid lg:grid-cols-[1fr_1.5fr] gap-8 md:gap-12.5">
      
        <div className="border px-6 sm:px-10 py-7 rounded-cs order-2 lg:order-1">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[56px]">
            Contact info
          </h2>
          <div className="space-y-8 mt-8">
            {contactInfo.map((info) => (
              <div key={info.id} className="flex items-start gap-6">
                <div className="bg-deepgreen p-2 sm:p-4 w-fit rounded-md">
                  <Icon
                    icon={info.icon}
                    width="20"
                    height="20"
                    className="text-red"
                  />
                </div>
                <div>
                  <p className="font-light sm:text-lg md:text-xl text-charcoal">
                    {info.name}
                  </p>
                  <a
                    href={info.href}
                    className="sm:text-lg md:text-xl font-semibold mt-1 hover:underline hover:text-red"
                  >
                    {info.value}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-8" />
          <div>
            <p className="font-light text-lg sm:text-xl text-charcoal">Office hours</p>
            <div className="space-y-8 mt-8">
              {officeHours.map((officeHour) => (
                <div key={officeHour.id} className="flex justify-between gap-4">
                  <p className="font-light sm:text-lg md:text-xl text-charcoal">
                    {officeHour.name}
                  </p>
                  <p className="font-semibold sm:text-lg md:text-xl text-charcoal">
                    {officeHour.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-8" />
          <div>
            <p className="font-light text-lg sm:text-xl text-charcoal">Follow us</p>
            <div className="flex gap-x-8 mt-8">
              <a href="#">
                <Icon
                  icon="ic:baseline-facebook"
                  width="21"
                  className="hover:text-red"
                />
              </a>
              <a href="#">
                <Icon
                  icon="mdi:instagram"
                  width="20"
                  height="20"
                  className="hover:text-red"
                />
              </a>
              <a href="#">
                <Icon
                  icon="codicon:twitter"
                  width="20"
                  height="20"
                  className="hover:text-red"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border px-6 sm:px-10 py-7 rounded-cs order-1 lg:order-2">
          <h2 className="font-bold text-2xl sm:text-3xl md:text-5xl lg:text-[56px]">
            Send us a message
          </h2>
          <form action="#" className="space-y-5 mt-8">
            <div>
              <h5 className="text-lg sm:text-xl">I'm interested in…</h5>
              <div className="flex flex-wrap items-center gap-2 sm:gap-5 mt-4">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="border font-hind-siliguri py-2.5 px-4 rounded-cs sm:text-lg md:text-xl hover:bg-deepgreen hover:text-white"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-lg text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-14 md:h-20"
              />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-lg text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-14 md:h-20"
              />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-lg text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-14 md:h-20"
              />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-lg text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all h-14 md:h-20"
              />
            </div>
            <div>
              <textarea
                placeholder="Enter Message"
                rows={5}
                className="w-full px-5 py-3.5 bg-[#DDE1E6] rounded-lg text-sm md:text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red/30 transition-all resize-none h-30 md:h-40"
              />
            </div>
            <button
              type="submit"
              className="px-8 py-3 bg-red hover:bg-[#1D2F64] text-white rounded-cs font-medium transition-colors cursor-pointer mx-auto w-fit block  "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
