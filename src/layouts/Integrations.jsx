import React from 'react'
import { Element } from 'react-scroll'
import i1 from "../assets/integrations/i1.png"
import i2 from "../assets/integrations/i2.png"
import i3 from "../assets/integrations/i3.png"
import i4 from "../assets/integrations/i4.png"
import i5 from "../assets/integrations/i5.png"


export default function Integrations() {
  return (
    <Element name="integrations" className="mt-10  ">
          <div className="container">
            <div className="flex flex-col py-10 gap-5 ">
              <h3 className="bg-white py-1 px-3 text-sm text-gray-500 rounded-3xl shadow-xl mx-auto">
                Integrations
              </h3>
              <h1 className=" md:text-4xl text-2xl font-semibold rounded-3xl  mx-auto text-center">
                Powerful Integrations, <br />
                Effortless Setup
              </h1>
               
               <div className='w-full flex justify-center items-center inner-bottom-white  '>
                <div className='bg-gradient-to-b from-sky-200 via-white to-white size-100 md:size-[700px] rounded-full relative inner-bottom-white '>
                  <div className='size-16 bg-gradient-to-br from-card-left border-white border shadow-md to-card-right rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-z-40 flex justify-center items-center  '>
                  <img src={i1} className='size-10' alt="" />
                  </div>
                  <div className='size-16 bg-gradient-to-br from-card-left border-white border shadow-md to-card-right rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-z-40 flex justify-center items-center  '>
                  <img src={i2} className='size-10' alt="" />
                  </div>
                  <div className='size-16 bg-gradient-to-br from-card-left border-white border shadow-md to-card-right rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-z-40 flex justify-center items-center  '>
                  <img src={i3} className='size-10' alt="" />
                  </div>
                  <div className='size-16 bg-gradient-to-br from-card-left border-white border shadow-md to-card-right rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-z-40 flex justify-center items-center  '>
                  <img src={i4} className='size-10' alt="" />
                  </div>
                  <div className='size-16 bg-gradient-to-br from-card-left border-white border shadow-md to-card-right rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -rotate-z-40 flex justify-center items-center  '>
                  <img src={i5} className='size-10' alt="" />
                  </div>
                
                </div>
               </div>
            </div>
          </div>
        </Element>
  )
}
