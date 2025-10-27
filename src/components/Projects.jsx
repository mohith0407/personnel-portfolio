'use client';
import { projects_data } from '@/constants/Data';
import ProjectCard from './ProjectCard';

// Main Projects Section Component
export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">A selection of my best work demonstrating my passion for design and code.</p>
        </div>

        {/* Project List with Centered Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line (Runs through the center gap between the columns) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 transform -translate-x-1/2"></div>
          
          {projects_data.map((project, index) => (
            <ProjectCard 
              key={project.number} 
              project={project} 
              isOdd={index % 2 === 0} // True for index 0, 2, 4... (Project 01, 03, 05...)
            />
          ))}
        </div>
        <div className="text-center mt-16">
          <a 
            href="https://github.com/mohith0407/" 
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-amber-500 hover:bg-amber-600 transition duration-300 transform hover:scale-105"
          >
            View More Projects...
          </a>
        </div>
      </div>
    </section>
  );
}