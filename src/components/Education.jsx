'use client';
import Image from 'next/image';
import { education } from '@/constants/Data';

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden py-20 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Education</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div
          className="md:w-1/2 flex justify-center opacity-0 translate-x-[-40px] animate-fadeInLeft"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-2xl ring-4 ring-amber-200">
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
          className="md:w-1/2 w-full space-y-6 opacity-0 translate-x-[40px] animate-fadeInRight"
        >
          {education.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 bg-amber-50 rounded-2xl shadow transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
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