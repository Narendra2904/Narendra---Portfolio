import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Sparkles, Code2, Lightbulb } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../mockData';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-400/20 to-blue-400/20 dark:from-cyan-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <Code2 className="h-12 w-12 text-blue-600 dark:text-cyan-400" />
        </div>
        <div className="absolute top-40 right-20 opacity-20 animate-float" style={{ animationDelay: '0.5s' }}>
          <Lightbulb className="h-16 w-16 text-cyan-600 dark:text-blue-400" />
        </div>
        <div className="absolute bottom-40 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <Sparkles className="h-10 w-10 text-blue-500 dark:text-cyan-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-cyan-400 rounded-full text-sm font-normal animate-fadeIn">
                Welcome to my portfolio
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-slate-900 dark:text-white leading-tight">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 inline-block hover:scale-105 transition-transform duration-300">
                {personalInfo.name.split(' ')[0]}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-normal">
              {personalInfo.title}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-normal">
              B.Tech student specializing in AI & Machine Learning with a passion for building innovative web solutions and solving real-world problems.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                className="rounded-lg border-2 border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-cyan-600 hover:bg-blue-50 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                Download Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-600 transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className={`relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 dark:from-blue-500 dark:to-cyan-500 rounded-3xl rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 dark:from-cyan-500 dark:to-blue-500 rounded-3xl -rotate-6 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* Profile Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 hover:scale-105 transition-transform duration-500 hover:rotate-1">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
