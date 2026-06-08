import CommonHeading from '../CommonHeading'
const categories=[
    "all","charity","charity","charity","charity","charity"
]
export default function OurGallery() {
  return (
    <section className='container mt-16'>
        <CommonHeading text="our" redText="Gallery" center={true}/>
        <p className='font-semibold text-center mt-8'>We create events aiming to pear to the voice for children and gather for support. Please update with our events and confirm you presence.</p>
        <div className='flex items-center justify-center gap-10 font-bold text-[15px] text-charcoal mt-8 mb-14'>
            {categories.map((category,id)=><button className='capitalize' key={id}>
                {category}
            </button>)}
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {Array.from({length:8}).map((_,id)=><div key={id} className='w-full h-75 bg-black'>
                
            </div>)}
        </div>
    </section>
  )
}
