'use client';
import Image from 'next/image';
import { education } from '@/constants/Data';

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-12 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Education</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Image Section */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end items-center
                     md:opacity-100 opacity-100
                     md:translate-x-[-40px] translate-x-0
                     md:animate-fadeInLeft"
        >
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-200 mx-auto">
            <Image
              src="/assets/boy-reading-book.webp"
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Education Cards */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6
                     md:opacity-100 opacity-100
                     md:translate-x-[40px] translate-x-0
                     md:animate-fadeInRight"
        >
          {education.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 bg-amber-50 rounded-2xl shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
                         w-full sm:w-[90%] md:w-full mx-auto"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-lg shadow-sm">
                {item.icon}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-amber-500 text-sm font-semibold">{item.year}</h4>
                <h3 className="text-gray-900 text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
