'use client';
import { skills } from "@/constants/Data";
import SkillCard from "./SkillCard";
const infiniteSkills = [...skills, ...skills, ...skills, ...skills];
export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">My Toolkit</h2>
          <p className="text-xl text-gray-600">Technologies I use to bring ideas to life.</p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* The scrolling track */}
          <div className="flex space-x-8 animate-scroll">
            {infiniteSkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}