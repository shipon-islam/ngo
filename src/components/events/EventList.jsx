import { Icon } from "@iconify/react";
import Button from "../Button";

const events = [
  {
    id: 1,
    title: "Event title",
    image: "",
    date: {
      start: "10:00",
      end: "05:00",
    },
    location: "dhaka",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    title: "Event title",
    image: "",
    date: {
      start: "10:00",
      end: "05:00",
    },
    location: "dhaka",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    title: "Event title",
    image: "",
    date: {
      start: "10:00",
      end: "05:00",
    },
    location: "dhaka",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 4,
    title: "Event title",
    image: "",
    date: {
      start: "10:00",
      end: "05:00",
    },
    location: "dhaka",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 5,
    title: "Event title",
    image: "",
    date: {
      start: "10:00",
      end: "05:00",
    },
    location: "dhaka",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];
export default function EventList() {
  return (
    <section className="container">
      <div className="space-y-10 md:space-y-8">
        {events.map((event) => (
          <div key={event.id} className="grid md:grid-cols-[1fr_1.5fr] gap-8">
            <div>
              <div className="md:max-w-133.25 w-full h-88.5 bg-black" />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-semibold">{event.title}</h2>
                <div className="flex items-center gap-6 capitalize font-medium text-sm my-5">
                  <p className="flex items-center gap-1">
                    <Icon
                      icon="ph:clock-duotone"
                      width="21"
                      height="21"
                      className="text-blue-500/70"
                    />
                    <span>
                      {event.date.start}- {event.date.end}
                    </span>
                  </p>
                  <p className="flex items-center gap-1">
                    <Icon
                      icon="tdesign:location-filled"
                      width="21"
                      height="21"
                      className="text-gray-600"
                    />
                    <span>{event.location}</span>
                  </p>
                </div>
                <p className="text-sm font-medium">{event.desc}</p>
              </div>
              <Button size="small" type="outline" className="w-fit mt-4">
                Learn More
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
