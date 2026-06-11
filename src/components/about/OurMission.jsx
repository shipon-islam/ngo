import Button from "../Button";
import CommonHeading from "../CommonHeading";
import { VertileLine } from "../Icon";
const ourMissions = [
  {
    id: 1,
    title: "Equity First",
    desc: "We direct resources to the communities with the greatest need, ensuring no child is left behind due to geography or circumstance.",
  },
  {
    id: 2,
    title: "Community-Led",
    desc: "Local voices drive our programs. We partner with communities — not just for them — creating lasting, self-sustaining change.",
  },
  {
    id: 3,
    title: "Measurable Impact",
    desc: "Every program is tracked, evaluated, and refined. Transparency and accountability are at the heart of how we operate.",
  },
  {
    id: 4,
    title: "Lifelong Learning",
    desc: "From nursery to vocational school, we support learners across every stage — because education doesn't stop at graduation.",
  },
];
const ourSuccess = [
  {
    id: 1,
    name: "Children Enrolled",
    value: "15K",
  },
  {
    id: 2,
    name: "Schools Supported",
    value: "320",
  },
  {
    id: 3,
    name: "Graduation Rate",
    value: "92%",
  },
  {
    id: 4,
    name: "Countries Active",
    value: "18",
  },
];
export default function OurMission() {
  return (
    <section className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 container">
      <CommonHeading text="Our" redText="Mission" center={true} />
      <div className="mt-8">
        <h2 className=" font-bold text-center text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">
          {" "}
          Unlocking potential, one classroom at a time.
        </h2>
        <div className="grid md:grid-cols-2 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-9 lg:mt-11">
          <div>
            <p className="sm:text-lg font-medium  text-center mx-auto md:mx-0 mb-8 md:text-justify max-w-123.75">
              Founded in 2008, BrightPath Foundation was built on a single
              belief: that access to education is not a privilege — it is a
              right. We work in underserved communities to build schools, train
              teachers, and provide scholarships that open doors to a better
              future.
            </p>
            <Button size="small" type="outline" className="hidden md:block">
              Learn More
            </Button>
          </div>
          <div>
            <div className="bg-black h-45 sm:h-60 md:h-70 xl:h-75 rounded-cs " />
            <Button
              size="small"
              type="outline"
              className="w-fit block mx-auto md:hidden mt-8"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8.5 mt-8">
        {ourMissions.map((mission) => (
          <div
            key={mission.id}
            className="relative before:h-[101%] before:min-w-0.75 before:bg-red before:absolute before:-top-px before:-left-1 border border-deepgreen rounded-r-4xl px-6 py-7.5"
          >
            <div>
              <p className="font-semibold ">{mission.title}</p>
              <p className="text-sm mt-2 font-medium">{mission.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 sm:gap-4 md:gap-8 mt-4 sm:mt-6 md:mt-9 lg:mt-11">
        <div className="md:order-2">
          <p className="sm:text-lg font-medium mb-8 text-center mx-auto md:mx-0 md:text-justify  max-w-123.75">
            Our model is holistic. We don't just build classrooms; we nurture
            ecosystems where learning can truly thrive — from early childhood
            programs to vocational training for young adults.
          </p>
          <Button size="small" type="outline" className="hidden md:block">
            Learn More
          </Button>
        </div>
        <div className="md:order-1 ">
          <div className="bg-black h-45 sm:h-60 md:h-70 xl:h-75 rounded-cs " />
          <Button
            size="small"
            type="outline"
            className="w-fit block mx-auto md:hidden mt-8"
          >
            Learn More
          </Button>
        </div>
      </div>

      <div className="bg-deepgreen text-white grid sm:grid-cols-2 gap-8 lg:grid-cols-4 px-10 sm:px-16 md:px-19 py-14 sm:py-20 md:py-25 mt-8">
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
