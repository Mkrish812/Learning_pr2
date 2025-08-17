import React from "react";
import { Element } from "react-scroll";
import B1 from "../assets/Blogs/B1.png";
import B2 from "../assets/Blogs/B2.png";
import B3 from "../assets/Blogs/B3.png";

export default function Blog() {
  const Blogdata = [
    {
      id: 1,
      image: B1,
      title: "What We Learned From 10K+ Users",
      description:
        "Insights and lessons from real users that are shaping the future of our product.",
    },
    {
      id: 2,
      image: B2,
      title: "How We Scaled Our Platform",
      description:
        "Behind-the-scenes of our journey to handle millions of requests smoothly.",
    },
    {
      id: 3,
      image: B3,
      title: "Top 5 Features Users Love",
      description:
        "A rundown of the most popular features based on usage data and feedback.",
    },
  ];

  return (
    <Element name="blog" className="mt-10 py-10">
      <div className="container">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Blog
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Insights & Updates
          </h1>
        </div>
        <div className="grid grid-cols-1 place-content-center gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Blogdata.map((blog) => (
            <div className="bg-secondary group max-w-md rounded-2xl p-3 transition-all duration-300 ease-linear hover:shadow-2xl">
              <div className="h-60 w-full overflow-hidden rounded-2xl">
                <img
                  src={blog.image}
                  className="h-60 w-full rounded-2xl transition-all duration-300 ease-linear group-hover:scale-110"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-5 px-3 py-5">
                <h2 className="text-2xl">{blog.title}</h2>
                <p className="text-gray-500">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}
