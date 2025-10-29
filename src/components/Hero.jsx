'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-24  min-h-[650px] flex items-center bg-gray-50"
    >
      <div className="absolute right-0 top-0 w-[50%] h-full z-0 bg-gradient-to-l from-amber-300 via-amber-200 to-transparent md:hidden" />
      <div className="absolute right-0 top-0 w-[55%] h-full z-0 hidden md:block">
        <Image
          src="/assets/yellow-bg.png"
          alt="Yellow background shape"
          fill
          priority
          className="object-cover object-right"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto  px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div
          className="md:w-1/2 max-w-xl text-center md:text-left transition duration-700 ease-out transform translate-y-0 opacity-100"
        >
          <p className="uppercase text-2xl text-gray-700 font-bold mb-2 tracking-wider">
            Full Stack Developer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Hello, my name is <br />
            <span className="text-amber-400">G K H <span className='text-gray-700 md:text-amber-400 '>MOHITH</span> </span>
          </h1>
          <p className="text-gray-700 text-base font-medium sm:text-lg mb-6 leading-relaxed">
            I create clean and user-centered websites — minimal, fast, and delightful to use.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="https://github.com/mohith0407"
              className="px-6 py-3 bg-amber-400 text-black rounded-lg font-semibold hover:bg-amber-300 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] md:text-white shadow-md hover:shadow-lg"
            >
              Github
            </a>
            <a
  href="/assets/Resume V3.pdf"
  download="GKH_Mohith_Resume.pdf"
  target="_blank" rel="noopener noreferrer" 
  className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98]"
>
  Resume
</a>
          </div>
        </div>

        {/* Right (Profile Image) */}
        <div
          className="md:w-1/3 flex justify-center md:justify-end transition duration-700 ease-out opacity-100 scale-100"
        >
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
            <Image
              src="/assets/profile3.jpg"
              alt="Profile"
              fill
              priority
              sizes="(max-width: 768px) 280px, 360px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}