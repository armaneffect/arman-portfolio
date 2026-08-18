import React from 'react';

import trivago from '../../src/assets/trivago.png'
import openshop from '../../src/assets/openshop.png'
import cozynest from '../../src/assets/cozynest.png'
import image from '../../src/assets/image.png'



const ProjectCard = () => {
  return (
    <div id='project' className='m-2 mt-16'>
      <h1 className='md:text-5xl text-3xl inline bg-gradient-to-r from-[#8A55F8] to-white text-transparent bg-clip-text mt-10'>Recent Projects</h1>



      {/* OpenShop Project */}
      <div className="p-3 md:p-7 rounded-2xl mt-10 bg-[#140C1C] border border-[#2A1454] text-white flex flex-col lg:flex-row gap-10 items-start">
        {/* Left content */}
        <div className="flex-1 space-y-4">
          <p className="text-purple-400 text-sm">E-commerce Platform</p>

          <h2 className="text-3xl font-bold">OpenShop</h2>

          <p className="text-gray-300">
            OpenShop is a full-stack multi-vendor e-commerce platform built for
            modern online businesses. The platform provides product management,
            shopping cart, checkout, order management, shop management, and
            customer features through a scalable REST API architecture.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-4">
                     <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              Laravel
            </span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              Next.js
            </span>


            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              REST API
            </span>

            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              MySQL
            </span>
            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              Sanctum
            </span>

            <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">
              Tailwind CSS
            </span>
          </div>

          {/* Project Links */}
          <div className="mt-4">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=m4NMR0gjB6Y"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#4c18b3a4] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full transition"
              >
                Video Demo
              </a>

            
            </div>

            {/* Developer */}
            <div className="flex items-center gap-3 mt-5">
              <img
                src={image}
                alt="Arman Khan"
                className="w-10 h-10 rounded-full"
              />

              <div>
                <p className="text-sm font-semibold text-purple-400">
                  Arman Khan
                </p>
                <p className="text-xs text-gray-400">
                  Full-Stack Web Developer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Preview */}
        <div className="flex-1 w-full">
          <img
            src={openshop}
            alt="OpenShop Project Preview"
            className="rounded-xl border border-gray-700 shadow-lg"
          />
        </div>
      </div>

      {/* ========================================================== */}

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2  space-x-1  '>



        {/* ============================================== */}
        <div className=" p-3 md:p-7 rounded-2xl mt-8 bg-[#140C1C] border border-[#2A1454]  text-white flex flex-col  gap-10 items-start">

          <div className="flex-1 w-full ">
            <img
              src={cozynest} // Replace with actual image path
              alt="Project Preview"
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <p className="text-purple-400 text-sm">Social App</p>
            <h2 className="text-3xl font-bold">Cozy Nest</h2>
            <p className="text-gray-300">
              Cozy Nest is a full-stack web application designed to help users find and book their ideal vacation rentals.
              It allows users to browse listings, view property details, and make reservations, while hosts can manage their listings and bookings.
              Built with modern technologies, the platform ensures a seamless user experience, secure authentication, and real-time data interactions.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Laravel</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Mysql</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Blade</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Breeze</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Tailwindcss</span>
            </div>


            {/* Testimonial */}
            <div className="mt-4">

              <div className="flex flex-wrap gap-3 mt">
                <a href='https://github.com/armaneffect/CozyNest' target='_blank' className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Client</a>
              </div>
            </div>
          </div>
        </div>





        <div className=" p-3 md:p-7 rounded-2xl mt-8 bg-[#140C1C] border border-[#2A1454]  text-white flex flex-col  gap-10 items-start">

          <div className="flex-1 w-full ">
            <img
              src={trivago} // Replace with actual image path
              alt="Project Preview"
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
          {/* Left content */}
          <div className="flex-1 space-y-4">
            <p className="text-purple-400 text-sm">Hotel App</p>
            <h2 className="text-3xl font-bold">Trivago</h2>
            <p className="text-gray-300">
              A real estate website with property listings, profile management, and social media login
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mt-4">
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">React-Router</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Aos</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Firebase</span>
              <span className="bg-[#1E2939] text-sm px-4 py-1 rounded-full">Tailwindcss</span>
            </div>
            <div className="mt-4">

              <div className="flex flex-wrap gap-3 mt">
                <a href='https://trivago-nu.vercel.app' target='_blank' className="bg-[#4c18b3a4] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Live</a>
                <a href='https://github.com/armangit1/hoteltrivago' target='_blank' className="bg-[#1f427580] hover:bg-[#896cc4] text-md px-4 py-1 rounded-full">Client</a>

              </div>

            </div>
          </div>

        </div>










      </div>


    </div>
  );
};

export default ProjectCard;
