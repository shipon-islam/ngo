import HelpUsBanner from "@/components/home/HelpUsBanner";
import Hero from "@/components/home/Hero";
import OurCauses from "@/components/home/OurCauses";
import OurGallery from "@/components/home/OurGallery";
import UpcommingEvents from "@/components/home/UpcommingEvents";
export default function Home() {
  return (
    <main>
      <Hero/>
      <OurCauses/>
      <HelpUsBanner/>
      <OurGallery />
      <UpcommingEvents/>
    </main>
  );
}
