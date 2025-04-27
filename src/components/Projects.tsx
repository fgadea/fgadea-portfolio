import { useState } from 'react';
import { ExternalLink, Code } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { projects } from '../data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeFilter));

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'ios', name: 'iOS Apps' },
    { id: 'cross-platform', name: 'Cross-Platform' },
    { id: 'ui', name: 'UI/UX Design' }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="My Projects" 
          subtitle="A collection of my recent work" 
        />
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter.id
                  ? 'bg-primary-600 dark:bg-primary-500 text-white'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                  <div className="flex space-x-2">
                    {project.links.live && (
                      <a 
                        href={project.links.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.links.code && (
                      <a 
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Code size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3">
                  {project.categories.map((category) => (
                    <span 
                      key={category}
                      className="text-xs font-medium px-2 py-1 rounded-full bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More projects button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            View More on GitHub
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;