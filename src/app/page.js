import HelpUsBanner from "@/components/home/HelpUsBanner";
import Hero from "@/components/home/Hero";
import LatestBlog from "@/components/home/LatestBlog";
import OurCauses from "@/components/home/OurCauses";
import OurGallery from "@/components/home/OurGallery";
import OurPeopleSays from "@/components/home/OurPeopleSays";
import OurSponsor from "@/components/home/OurSponsor";
import OurVolunteers from "@/components/home/OurVolunteers";
import UpcommingEvents from "@/components/home/UpcommingEvents";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Home() {
  return (
    <main>
      <Hero/>
      <OurCauses/>
      <HelpUsBanner/>
      <OurGallery />
      <UpcommingEvents/>
      <OurVolunteers/>
      <OurPeopleSays/>
      <LatestBlog/>
      <OurSponsor/>
    </main>
  );
}
