

import { FiExternalLink, FiGithub } from 'react-icons/fi';
const ProjectCard = ({ project, isOdd }) => {
  const numberOrder = isOdd ? 'order-first' : 'order-last'; 
  const descriptionOrder = isOdd ? 'order-last' : 'order-first';
  
  const numberAlignment = isOdd ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12';
  
  // Styles for the placement of the connecting dot relative to the card edge
  const dotStyle = isOdd ? { left: '-8px' } : { right: '-8px' };

  return (
    <div className="relative py-12">
      
      {/* Project Content Grid (Two Columns on Desktop) */}
      <div className="md:grid md:grid-cols-2 gap-8 items-center">
        
        {/* Project Number Block (Takes up one column) */}
        <div className={`${numberOrder} ${numberAlignment} w-full text-5xl font-extrabold text-amber-500 mb-4 md:mb-0`}>
            {project.number}
        </div>

        {/* Project Description Block (Takes up the other column) */}
        <div className={`${descriptionOrder} relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300`}>
          <div className="hidden md:block absolute w-4 h-4 rounded-full bg-amber-500 border-4 border-gray-50 transform -translate-y-1/2 top-1/2 z-10" 
               style={dotStyle}>
          </div>
          
          <div className='md:text-left'>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
          </div>
          
          {/* Tags */}
          <div className='flex flex-wrap gap-2 mb-4 '>
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className='flex gap-4'>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-500 transition flex items-center gap-1 font-semibold">
              <FiExternalLink className="w-5 h-5" /> Live Demo
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-amber-500 transition flex items-center gap-1 font-semibold">
              <FiGithub className="w-5 h-5" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectCard