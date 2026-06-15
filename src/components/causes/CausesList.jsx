"use client";
import { useState } from "react";
import CausesCard from "../CausesCard";

const categories = [
  "All Cause",
  "Education",
  "Healthcare",
  "Water",
  "Food",
  "Environment",
  "Shelter",
];
const allCauses = [
  {
    id: 1,
    image: "",
    layout: "verticle",
    category: "Education",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 2,
    image: "",
    layout: "horizontal",
    category: "Education",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 3,
    image: "",
    layout: "horizontal",
    category: "Healthcare",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 4,
    image: "",
    layout: "horizontal",
    category: "Water",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 5,
    image: "",
    layout: "horizontal",
    category: "Healthcare",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 6,
    image: "",
    layout: "horizontal",
    category: "Food",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 7,
    image: "",
    layout: "horizontal",
    category: "Environment",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 8,
    image: "",
    layout: "horizontal",
    category: "Food",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
  {
    id: 9,
    image: "",
    layout: "horizontal",
    category: "Shelter",
    title: "School for 500 Children in Sylhet District",
    desc: "Many children in rural Sylhet lack access to even basic schooling. This initiative funds a full school building, trained teachers, and learning materials — giving 500 children a genuine future.",
    donation: {
      target: 90000,
      risen: 45000,
    },
    donors: 1240,
    location: "sylhet",
    date: "42 days left",
  },
];
export default function CausesList() {
  const [causesList, setCausesList] = useState(allCauses);
  const handleCategory = (category) => {
    if (category.toLowerCase() === "all cause") {
      return setCausesList(allCauses);
    }
    setCausesList(
      allCauses.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase(),
      ),
    );
  };
  return (
    <section className="container mb-16">
      <div className="max-w-181.5 flex flex-wrap items-center gap-1 p-2 shadow-sm border border-gray-300 rounded-md  text-sm ">
        {categories.map((category, index) => (
          <button
            className={`px-2.5 py-1  rounded-md ${index === 0 ? "bg-deepgreen text-white" : "text-black hover:bg-deepgreen hover:text-white"}`}
            key={index}
            onClick={() => handleCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-8">
          {causesList.map((causes) => (
            <CausesCard key={causes.id} causes={causes} />
          ))}
        </div>
      </div>
    </section>
  );
}
