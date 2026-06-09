import { Icon } from "@iconify/react";
import Button from "../Button";
import CommonHeading from "../CommonHeading";
const donations = [
  {
    id: 1,
    title: "Education for Children",
    icon: "noto:books",
    donationTarget: 50000,
    donationGet: 25000,
  },
  {
    id: 2,
    title: "Clean Water Access",
    icon: "streamline-sharp-color:water-drop-flat",
    donationTarget: 50000,
    donationGet: 35000,
  },
  {
    id: 3,
    title: "Bring Electric and Light",
    icon: "streamline-sharp-color:water-drop-flat",
    donationTarget: 45000,
    donationGet: 25000,
  },
];
const achivements=[
    {
        id:1,
        value:"12,400+",
        title:"Lives Impacted"
    },
    {
        id:2,
        value:"৳2.1M",
        title:"Funds Raised"
    },
    {
        id:3,
        value:"64",
        title:"Districts Reached"
    },
    {
        id:4,
        value:"320",
        title:"Volunteers"
    },
]
export default function OurCauses() {
  return (
    <section className="container mt-16 ">
      <CommonHeading text="our" redText="causes" center={true} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {donations.map((donation) => (
          <div key={donation.id} className="rounded-[20px] overflow-hidden">
            <div className="h-55 bg-warm grid place-content-center">
              <Icon icon={donation.icon} width={50} height={50} />
            </div>
            <div className="bg-charcoal text-white px-2.5 py-5">
              <p className="font-semibold">{donation.title}</p>
              <div className="bg-white h-2.25 rounded-full relative overflow-hidden my-4">
                <span
                  style={{
                    width:
                      (Number(donation.donationGet) /
                        Number(donation.donationTarget)) *
                        100 +
                      "%",
                  }}
                  className="bg-deepgreen block h-full absolute top-0 left-0 rounded-full"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center  gap-1 font-semibold">
                  <span className="flex items-center">
                    ৳ 
                    {donation.donationTarget.toLocaleString()}
                  </span>{" "}
                  /{" "}
                  <span className="flex items-center">
                    ৳ 
                    {donation.donationTarget.toLocaleString()}
                  </span>
                </div>
                <Button size="small">Donate</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <div className="w-full h-101 bg-black rounded-cs grid place-items-center">
          <h5 className="font-bold text-white text-5xl">IMAGE</h5>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
        {achivements.map((achivement)=><div key={achivement.id} className="bg-black grid  place-items-center text-white rounded-cs py-6.5">
            <p className="font-semibold">{achivement.value}</p>
            <p className="font-medium text-sm">{achivement.title}</p>
        </div>)}
      </div>
      
    </section>
  );
}
