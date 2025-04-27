import { Code, Globe, Smartphone, Palette } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="My background and passion" />
        
        <div className="max-w-5xl mx-auto mt-16">
            <div className="order-2 md:order-1">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I'm a passionate iOS developer with over 8 years of experience crafting beautiful, 
                intuitive mobile applications. My journey in software development began with a deep 
                curiosity about how technology can improve our daily lives.
              </p>
              
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                I specialize in Swift and UIKit/SwiftUI, but my experience extends beyond iOS to 
                cross-platform solutions like Flutter and KMM. I believe great software 
                comes from understanding users deeply and solving their problems with elegant, 
                maintainable code.
              </p>
              
              <p className="mt-4 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or mentoring aspiring developers.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-blue-50 text-blue-800 rounded-full text-sm font-medium dark:bg-blue-900/30 dark:text-blue-300">
                  Swift
                </span>
                <span className="px-4 py-2 bg-indigo-50 text-indigo-800 rounded-full text-sm font-medium dark:bg-indigo-900/30 dark:text-indigo-300">
                  SwiftUI
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-800 rounded-full text-sm font-medium dark:bg-purple-900/30 dark:text-purple-300">
                  UIKit
                </span>
                <span className="px-4 py-2 bg-pink-50 text-pink-800 rounded-full text-sm font-medium dark:bg-pink-900/30 dark:text-pink-300">
                  Objective-C
                </span>
                <span className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm font-medium dark:bg-green-900/30 dark:text-green-300">
                  Flutter
                </span>
                <span className="px-4 py-2 bg-green-50 text-green-800 rounded-full text-sm font-medium dark:bg-green-900/30 dark:text-green-300">
                  KMM
                </span>
              </div>
            {/* <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-blue-500/20 rounded-3xl transform rotate-3 scale-105 dark:from-primary-500/10 dark:to-blue-500/10"></div>
                <div className="relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Developer working on code" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div> */}
          </div>
          
          {/* Services */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">What I Do</h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">iOS Development</h4>
                <p className="text-slate-600 dark:text-slate-400">Creating native iOS apps with Swift, SwiftUI, and UIKit that deliver exceptional user experiences.</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Cross-Platform</h4>
                <p className="text-slate-600 dark:text-slate-400">Building cross-platform solutions Flutter and KMM to reach a wider audience.</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">UI/UX Design</h4>
                <p className="text-slate-600 dark:text-slate-400">Creating intuitive interfaces with clean aesthetics, following Apple's Human Interface Guidelines.</p>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Backend Integration</h4>
                <p className="text-slate-600 dark:text-slate-400">Connecting mobile apps to various backend services, ensuring smooth data flow and functionality.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;