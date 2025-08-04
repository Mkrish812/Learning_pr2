import React from "react";

export default function Test() {
  return (
    <>
      <section className="bg-gray-800 h-screen">
        <div className="container  mx-auto">
          <div className="flex h-screen justify-center transform perspective-distant transform-3d items-center">
            <div className="w-96 rounded-3xl rotate-x-[7deg] rotate-y-[-9deg]  ">
              <img src="try.png" className="object-center object-cover rounded-3xl " alt="" />
            </div>
          </div>
        </div>
      </section>
      <div className="h-screen"></div>
    </>
  );
}
