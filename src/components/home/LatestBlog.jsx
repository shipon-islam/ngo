import BlogCard from "../BlogCard";
import CommonHeading from "../CommonHeading";
const latestBlogs = [
  {
    id: 1,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 2,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 3,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
];
export default function LatestBlog() {
  return (
    <section className="mt-16 container">
      <div className="text-center max-w-155 mx-auto">
        <CommonHeading text="LATEST FROM" redText="BLOG" center={true} />
        <p className="mt-8 font-semibold">
          We create events aiming to pear to the voice for children and gather
          for support.Please update with our events and confirm you presence.
        </p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2  lg:grid-cols-3 gap-6.5">
        {latestBlogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id}/>
        ))}
      </div>
    </section>
  );
}
