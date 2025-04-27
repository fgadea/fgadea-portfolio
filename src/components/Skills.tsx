import SectionHeading from './ui/SectionHeading';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills & Expertise" 
          subtitle="Technologies and tools I work with" 
        />
        
        <div className="max-w-5xl mx-auto mt-16">
          {skills.map((category) => (
            <div key={category.name} className="mb-12">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <category.icon className="mr-2 h-5 w-5 text-primary-600 dark:text-primary-400" />
                {category.name}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.items.map((skill) => (
                  <div 
                    key={skill.name}
                    className="flex flex-row items-center bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 flex items-center justify-center mb-2">
                      {skill.icon ? (
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="h-8 w-8 text-slate-700 dark:text-slate-300"
                        />
                      ) : (
                        <div className="h-8 w-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold">
                          {skill.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <h4 className="text-sm font-medium text-slate-900 dark:text-white text-center">
                      {skill.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
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