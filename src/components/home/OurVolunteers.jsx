import CommonHeading from "../CommonHeading";
const volunteers=[
    {
        id:1,
        name:"Farnado rotia",
        position:"Secretery",
        image:""
    },
    {
        id:2,
        name:"Farnado rotia",
        position:"Secretery",
        image:""
    },
    {
        id:3,
        name:"Farnado rotia",
        position:"Secretery",
        image:""
    },
    {
        id:4,
        name:"Farnado rotia",
        position:"Secretery",
        image:""
    },
]
export default function OurVolunteers() {
  return (
    <section className="container">
        <div  className="text-center max-w-155 mx-auto">
            <CommonHeading text="our" redText="VOLUNTEERS" center={true}/>
            <p className="mt-8 font-semibold">We create events aiming to pear to the voice for children and gather for support.Please update with our events and confirm you presence.</p>
        </div>
        <div className="grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">
            {volunteers.map(volunteer=><div key={volunteer.id}>
                <div className="h-100 w-full bg-black">

                </div>
                <div className="text-center">
                    <h2 className="my-8 font-semibold text-4xl">{volunteer.name}</h2>
                    <p className="font-semibold">{volunteer.position}</p>
                </div>
            </div>)}
        </div>
    </section>
  )
}
