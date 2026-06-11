import CommonHeading from "../CommonHeading";
import { VertileLine } from "../Icon";
const ourSuccess = [
  {
    id: 1,
    name: "Finish Projects",
    value: "1250",
  },
  {
    id: 2,
    name: "Creative Materials",
    value: "1400",
  },
  {
    id: 3,
    name: "Experience Materials",
    value: "1250",
  },
  {
    id: 4,
    name: "Professinal awards",
    value: "1250",
  },
];
const programs = [
  {
    id: 1,
    title: "School Construction",
    desc: "Building safe, modern learning spaces in regions where children study under trees or in crumbling structures.",
    image: "",
  },
  {
    id: 2,
    title: "Scholarship Fund",
    desc: "Covering tuition, uniforms, and supplies for children from the most vulnerable households every year.",
    image: "",
  },
  {
    id: 3,
    title: "Teacher Training",
    desc: "Upskilling educators with modern pedagogy, mental health literacy, and digital tools for 21st-century teaching.",
    image: "",
  },
  {
    id: 4,
    title: "Digital Literacy",
    desc: "Equipping schools with devices and internet access, bridging the digital divide one classroom at a time.",
    image: "",
  },
  {
    id: 5,
    title: "Girl’s Education",
    desc: "Targeted programs to keep girls in school — combating early marriage, gender bias, and structural barriers.",
    image: "",
  },
  {
    id: 6,
    title: "Vocational Training",
    desc: "Practical skills training for youth aged 17–25, linking them to employment and entrepreneurship pathways.",
    image: "",
  },
];
export default function WhatWeDo() {
  return (
    <section className="container mt-16 ">
      <div>
        <div className="text-center">
          <CommonHeading text="What we" redText="do" center={true} />
          <h5 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[56px] mt-6 mb-3 sm:mt-8 sm:mt-4">Our Core Programs</h5>
          <p>
            Six interconnected initiatives designed to create a complete
            educational ecosystem.
          </p>
        </div>
        <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {programs.map((program) => (
            <div key={program.id} className="rounded-cs overflow-hidden ">
              <div>
                <div className="w-full h-66.5 bg-black" />
              </div>
              <div className="bg-charcoal text-white px-4.5 py-8 h-full">
                <h5 className="text-xl sm:text-2xl font-medium ">{program.title}</h5>
                <p className="text-[15px] sm:text-base font-semibold mt-3.5">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black text-white grid sm:grid-cols-2 gap-8 lg:grid-cols-4 px-10 sm:px-16 md:px-19 py-14 sm:py-20 md:py-25 mt-8">
              {ourSuccess.map((success) => (
                <div key={success.id} className="relative">
                  <div className="text-center">
                    <h3 className="text-[56px] font-bold">{success.value}</h3>
                    <p>{success.name}</p>
                  </div>
                  
                    <VertileLine className={`${success.id=== ourSuccess.length&&"hidden"} ${success.id=== 2&&"sm:hidden lg:block"} absolute top-8 right-1/2 sm:top-1/2 sm:right-0 sm:-translate-y-1/2 rotate-90 sm:rotate-0`} />
                  
                </div>
              ))}
            </div>
    </section>
  );
}
