import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/skills';

const Skills = () => {
  // Define color classes for different categories with proper contrast
  const colorClasses: Record<string, { bg: string, text: string }> = {
    'iOS Development': {
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      text: 'text-blue-800 dark:text-blue-300'
    },
    'Cross-Platform': {
      bg: 'bg-purple-50 dark:bg-purple-900/30',
      text: 'text-purple-800 dark:text-purple-300'
    },
    'UI/UX Design': {
      bg: 'bg-orange-50 dark:bg-orange-900/30',
      text: 'text-orange-800 dark:text-orange-300'
    },
    'Backend & DevOps': {
      bg: 'bg-green-50 dark:bg-green-900/30',
      text: 'text-green-800 dark:text-green-300'
    },
    'Programming': {
      bg: 'bg-cyan-50 dark:bg-cyan-900/30',
      text: 'text-cyan-800 dark:text-cyan-300'
    },
    'Tools & Frameworks': {
      bg: 'bg-violet-50 dark:bg-violet-900/30',
      text: 'text-violet-800 dark:text-violet-300'
    }
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="max-w-7xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {skills.map((category, index) => (
              <div key={category.name} className={`${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-2 ${
                    category.name === 'iOS Development' ? 'bg-blue-100 dark:bg-blue-900/30' :
                    category.name === 'Cross-Platform' ? 'bg-purple-100 dark:bg-purple-900/30' :
                    category.name === 'UI/UX Design' ? 'bg-orange-100 dark:bg-orange-900/30' :
                    category.name === 'Backend & DevOps' ? 'bg-green-100 dark:bg-green-900/30' :
                    category.name === 'Programming' ? 'bg-cyan-100 dark:bg-cyan-900/30' :
                    'bg-violet-100 dark:bg-violet-900/30'
                  }`}>
                    <category.icon className={`h-5 w-5 ${
                      category.name === 'iOS Development' ? 'text-blue-600 dark:text-blue-400' :
                      category.name === 'Cross-Platform' ? 'text-purple-600 dark:text-purple-400' :
                      category.name === 'UI/UX Design' ? 'text-orange-600 dark:text-orange-400' :
                      category.name === 'Backend & DevOps' ? 'text-green-600 dark:text-green-400' :
                      category.name === 'Programming' ? 'text-cyan-600 dark:text-cyan-400' :
                      'text-violet-600 dark:text-violet-400'
                    }`} />
                  </div>
                  {category.name}
                </h3>
                
                <div className="flex flex-wrap gap-4">
                  {category.items.map((skill) => (
                    <div 
                      key={skill.name}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses[category.name].bg} ${colorClasses[category.name].text} shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105`}
                    >
                      <h4 className="text-sm font-medium text-center">
                        {skill.name}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;