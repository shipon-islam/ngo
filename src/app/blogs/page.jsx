import BlogList from "@/components/blogs/BlogList";
import HeroBanner from "@/components/HeroBanner";
import OurSponsor from "@/components/home/OurSponsor";

export default function Blog() {
  return (
    <main>
      <HeroBanner>
        <div className="max-w-123.75">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold">
            OUR BLOGS
          </h2>
          <p className="mt-8">
            Every taka you give goes directly to communities across Bangladesh —
            funding education, healthcare, clean water, and hope for thousands
            of families.
          </p>
        </div>
      </HeroBanner>
      <BlogList/>
      <OurSponsor/>
    </main>
  );
}
