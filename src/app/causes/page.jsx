import CausesList from "@/components/causes/CausesList";
import HeroBanner from "@/components/HeroBanner";

export default function Causes() {
  return (
    <main>
      <HeroBanner>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex-1 max-w-120">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
              Help Us Make a
              <span className="text-red block">Real Difference</span>
            </h2>
            <p className="mt-8 ">
              Every taka you give goes directly to communities across Bangladesh — funding education, healthcare, clean water, and hope for thousands of families.
            </p>
          </div>
          <div className="border rounded-cs border-[#D5D4D470] bg-[#D9D9D91F] flex mt-6">
            <div className="p-3 sm:p-4 grid place-items-center text-center border-r  border-[#D5D4D470]">
                <h2 className="text-red text-xl sm:text-2xl font-medium">24</h2>
                <p className="font-medium text-xs sm:text-sm">Active Causes</p>
            </div>
            <div className="p-3 sm:p-4 grid place-items-center text-center border-r  border-[#D5D4D470]">
                <h2 className="text-red text-xl sm:text-2xl font-medium">৳4.2M</h2>
                <p className="font-medium text-xs sm:text-sm">Raised This Year</p>
            </div>
            <div className="p-3 sm:p-4 grid place-items-center text-center ">
                <h2 className="text-red text-xl sm:text-2xl font-medium">18,400</h2>
                <p className="font-medium text-xs sm:text-sm">Lives Impacted</p>
            </div>
           
          </div>
        </div>
      </HeroBanner>
      <CausesList/>
    </main>
  );
}
