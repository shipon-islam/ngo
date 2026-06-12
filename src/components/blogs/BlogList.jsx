import BlogCard from "../BlogCard";

const blogs = [
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
  {
    id: 4,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 5,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 6,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 7,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 8,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
  {
    id: 9,
    name: "Farnado rotia",
    role: "admin",
    desc: "Lorem ipsum dolor sit amet, consectetur adipicing elit. Nullam feugiat dignissim metus, id vestibulum tellus Cras ante commodo.",
    image: "",
  },
];
export default function BlogList() {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3  gap-x-8 gap-y-12">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
