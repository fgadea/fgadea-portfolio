import { ArrowDown, Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [typing, setTyping] = useState('');
  const fullText = 'iOS Developer';
  const typingSpeed = 120;
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;

    const typeText = () => {
      if (index <= fullText.length) {
        setTyping(fullText.slice(0, index));
        index++;
        timer = setTimeout(typeText, typingSpeed);
      } else {
        setShowArrow(true);
      }
    };

    typeText();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900 -z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMGgydjJoLTJ2LTJ6bS00IDRoMnYyaC0ydi0yem0wLTRoMnYyaC0ydi0yem0tNCA0aDJ2MmgtMnYtMnptMC00aDJ2MmgtMnYtMnptLTQgNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6bS00IDRoMnYyaC0ydi0yem0wLTRoMnYyaC0ydi0yem0tNCA0aDJ2MmgtMnYtMnptMC00aDJ2MmgtMnYtMnptLTQgNGgydjJoLTJ2LTJ6bTAtNGgydjJoLTJ2LTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50 dark:opacity-10 bg-repeat -z-10"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center md:text-left md:items-start">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              <span className="block">Hello, I'm <span className="text-primary-600 dark:text-primary-400">Felipe</span></span>
              <span className="mt-2 block text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-blue-600 dark:from-primary-400 dark:to-blue-400">
                {typing}<span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl">
              Crafting beautiful, intuitive iOS experiences with a passion for elegant code and pixel-perfect design. Building apps that users love.
            </p>
            
            {/* <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-full shadow-sm transition-all transform hover:scale-105 dark:bg-primary-500 dark:hover:bg-primary-600"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-medium rounded-full shadow-sm border border-slate-200 transition-all transform hover:scale-105 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white dark:border-slate-700"
              >
                Contact Me
              </a>
            </div> */}
            
            <div className="mt-8 flex space-x-5">
              <a 
                href="https://github.com/fgadea" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              </a>
              <a 
                href="https://linkedin.com/in/felipe-gadea-llopis" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      {showArrow && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/80 dark:bg-slate-800/80 shadow-md backdrop-blur-sm">
            <ArrowDown className="h-5 w-5 text-primary-600 dark:text-primary-400" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Hero;