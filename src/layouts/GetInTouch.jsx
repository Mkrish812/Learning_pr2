import React from 'react'
import { Element } from 'react-scroll'


export default function GetInTouch() {
  return (
     <Element name="blog" className="mt-10 py-10">
          <div className="container">
            <div className="flex flex-col gap-5 py-10">
              <h3 className="mx-auto rounded-3xl bg-white px-5 py-1 text-sm text-gray-500 shadow-xl">
                Contact
              </h3>
              <h1 className="mx-auto rounded-3xl text-center text-2xl font-semibold md:text-4xl">
                Get in Touch
              </h1>
            </div>

            <div className='bg-gradient-to-b flex mx-auto from-sky-400 via-blue-600  to-sky-600 relative rounded-2xl shadow-xl max-w-xl p-5 '>
              
             <div className=' w-full rounded-2xl bg-white shadow px-5 py-7 '>
                <form className='flex flex-col gap-5' action="">
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 ' htmlFor="Cname">Name</label>
                        <input className='placeholder:text-gray-400 bg-gray-100 rounded-md py-2 px-3 focus:outline focus:outline-blue-200' type="text" id='Cname' placeholder='Enter name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 ' htmlFor="Email">Email</label>
                        <input className='placeholder:text-gray-400 bg-gray-100 rounded-md py-2 px-3 focus:outline focus:outline-blue-200 ' type="text" id='Email' placeholder='Enter email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className='text-gray-500' htmlFor="Topic">Topic</label>
                        <select className='bg-gray-100 rounded-md py-2 px-3 focus:outline focus:outline-blue-200 ' name="Topic" id="">
                            <option value="Login">Login</option>
                            <option value="Payment">Payment</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                     <div className='flex flex-col gap-2'>
                        <label className='text-gray-500 ' htmlFor="Email">Email</label>
                        <textarea className='placeholder:text-gray-400 bg-gray-100 rounded-md py-2 px-3 focus:outline focus:outline-blue-200 ' type="text" id='Email' placeholder='Enter email' />
                    </div>
                    <button className='flex justify-center items-center bg-black/90 py-2 px-7 rounded-full text-white mx-auto'>Submit</button>

                </form>

             </div>
            </div>
           
          </div>
        </Element>
  )
}
