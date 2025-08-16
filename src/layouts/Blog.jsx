import React from 'react'
import { Element } from 'react-scroll'


export default function Blog() {
  return (
    <Element name="blog" className=" mt-10 py-10">
      <div className="container">
        <div className="flex flex-col gap-5 py-10">
          <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
            Blog
          </h3>
          <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
            Insights & Updates
          </h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center  '>
            <div className=' rounded-2xl bg-primary hover:shadow-2xl '>
                <img src="" alt="" />
            </div>

        </div>

      
      </div>
    </Element>
  )
}
