'use client';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-12 bg-white overflow-hidden pl-6 pr-6 sm:pl-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16 md:gap-20">

          {/* Image Block (shows first on mobile, second on desktop) */}
          <div className="order-1 md:order-2 md:w-1/2 flex justify-center md:justify-start">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden relative transition-transform duration-500 transform hover:rotate-3 hover:scale-[1.02]">
              <Image
                src="/assets/aboutme.webp"
                alt="About Me"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Text Content Block */}
          <div className="order-2 md:order-1 md:w-1/2 text-center md:text-left animate-fadeInLeft justify-start">
            <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="text-amber-600">Designing </span>Seamless Experiences Through Code
            </h2>
            <p className="text-lg text-start text-gray-700 mb-8 leading-relaxed max-w-xl md:max-w-none">
              I’m Mohith, an enthusiastic Full Stack Developer passionate about building scalable and user-centric web applications. I specialize in the MERN stack, crafting seamless frontend experiences and efficient backend systems. I enjoy solving complex problems, learning new technologies, and continuously improving my skills. My goal is to create impactful digital solutions that combine functionality with great design.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-500 hover:bg-amber-600 transition duration-300 transform hover:scale-105"
              >
                Work with me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-100 transition duration-300"
              >
                See my projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
