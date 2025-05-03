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
                  <category.icon className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
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
        
        {/* Experience timeline */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">
            Work Experience
          </h3>
          
          <div className="relative border-l-2 border-primary-200 dark:border-primary-900/50 ml-3 md:ml-6 pl-6 md:pl-8 space-y-10">
            {/* Experience item 1 */}
            <div className="relative">
              <div className="absolute -left-11 md:-left-14 top-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Senior iOS Developer</h4>
                <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 mt-1 mb-3">
                  <span className="font-medium">TechCorp Inc.</span>
                  <span className="mx-2">•</span>
                  <span>2021 - Present</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Led development of multiple iOS applications, managing a team of 3 junior developers.
                  Implemented CI/CD pipelines and reduced app startup time by 40%.
                </p>
              </div>
            </div>
            
            {/* Experience item 2 */}
            <div className="relative">
              <div className="absolute -left-11 md:-left-14 top-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">iOS Developer</h4>
                <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 mt-1 mb-3">
                  <span className="font-medium">MobileFirst Solutions</span>
                  <span className="mx-2">•</span>
                  <span>2018 - 2021</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Developed and maintained multiple iOS applications for clients in e-commerce and fintech sectors.
                  Integrated complex APIs and improved app performance by optimizing UI rendering.
                </p>
              </div>
            </div>
            
            {/* Experience item 3 */}
            <div className="relative">
              <div className="absolute -left-11 md:-left-14 top-0 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 border-2 border-primary-500 dark:border-primary-700 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Junior Mobile Developer</h4>
                <div className="flex flex-wrap items-center text-sm text-slate-600 dark:text-slate-400 mt-1 mb-3">
                  <span className="font-medium">App Ventures</span>
                  <span className="mx-2">•</span>
                  <span>2016 - 2018</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300">
                  Worked on hybrid applications using Flutter. Supported cross-platform development
                  and gained expertise in UI/UX implementation following Apple's design guidelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;