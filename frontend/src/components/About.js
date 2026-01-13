import React, { useEffect, useState } from 'react';
import { GraduationCap, MapPin, Mail, Phone } from 'lucide-react';
import { personalInfo, education } from '../mockData';
import { Card } from './ui/card';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {personalInfo.bio}
              </p>
            </div>

            {/* Contact Info */}
            <Card className="p-6 space-y-4 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-500 hover:scale-105">
              <h3 className="text-xl font-normal text-slate-900 dark:text-white mb-4">
                Contact Information
              </h3>
              
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 group">
                <Mail className="h-5 w-5 text-blue-600 dark:text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-normal">
                  {personalInfo.email}
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 group">
                <Phone className="h-5 w-5 text-blue-600 dark:text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors font-normal">
                  {personalInfo.phone}
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300 group">
                <MapPin className="h-5 w-5 text-blue-600 dark:text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                <span className="font-normal">{personalInfo.location}</span>
              </div>
            </Card>
          </div>

          {/* Education Section */}
          <div className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className="text-2xl font-medium text-slate-900 dark:text-white flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-blue-600 dark:text-cyan-400 animate-pulse" />
              Education
            </h3>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={edu.id}
                  className="p-6 border-l-4 border-blue-600 dark:border-cyan-400 bg-white dark:bg-slate-800 hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-normal text-slate-900 dark:text-white">
                      {edu.degree}
                    </h4>
                    {edu.current && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-normal rounded-full animate-pulse">
                        Current
                      </span>
                    )}
                  </div>
                  
                  <p className="text-blue-600 dark:text-cyan-400 font-normal mb-2">
                    {edu.field}
                  </p>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    {edu.institution}
                  </p>
                  
                  <p className="text-slate-500 dark:text-slate-500 text-sm mt-1 font-normal">
                    {edu.duration}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
