import DonationForm from "@/components/donation/DonationForm";
import HeroBanner from "@/components/HeroBanner";
import OurSponsor from "@/components/home/OurSponsor";

export default function page() {
  return (
    <main>
      <HeroBanner height="h-140 sm:h-180">
        <div className="max-w-195">
          <p className="text-sm bg-red px-3 py-1 w-fit rounded-md">Make a difference</p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold mt-8">
            Every gift opens <span className="text-red">a door to learning.</span>
          </h2>
          <p className="mt-8">
            Your donation funds classrooms, scholarships, and teacher training
            for children who need it most. 92% of every dollar goes directly to
            programs.
          </p>
        </div>
      </HeroBanner>
      <DonationForm/>
      <OurSponsor/>
    </main>
  );
}
