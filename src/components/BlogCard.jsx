import Link from "next/link";
import Button from "./Button";

export default function BlogCard({ blog }) {
  return (
    <div>
      <div className="w-full h-101 bg-black rounded-cs"></div>
      <div>
        <div className="flex justify-between items-center mt-4">
          <p className="capitalize">By: {blog.role}</p>
          <p>15 | 25</p>
        </div>
        <div className="mt-4 sm:mt-8">
          <h2 className=" font-semibold text-2xl sm:text-3xl lg:text-4xl">{blog.name}</h2>
          <p className="mt-4 mb-4 sm:mb-8">{blog.desc}</p>
          <Link href="/blog" className="ml-auto w-fit block">
            <Button size="small" type="outline">
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
