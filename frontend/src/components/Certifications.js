import React, { useEffect, useState } from 'react';
import { Award, Brain, Cloud } from 'lucide-react';
import { Card } from './ui/card';
import { certifications } from '../mockData';

const Certifications = () => {
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

    const element = document.querySelector('#certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const iconMap = {
    award: Award,
    brain: Brain,
    cloud: Cloud
  };

  return (
    <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            Professional certifications and achievements
          </p>
        </div>

        {/* Certifications Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const Icon = iconMap[cert.icon];
            const Wrapper = cert.link ? 'a' : 'div';

            return (
              <Wrapper
                key={cert.id}
                {...(cert.link && {
                  href: cert.link,
                  target: '_blank',
                  rel: 'noopener noreferrer'
                })}
                className="block"
              >
                <Card
                  className={`p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800
                  hover:shadow-2xl transition-all duration-500 hover:-translate-y-3
                  hover:scale-105 hover:rotate-1 group text-center cursor-pointer ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30
                      group-hover:bg-blue-600 dark:group-hover:bg-cyan-600
                      transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>

                  <h3 className="text-lg font-normal text-slate-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-blue-600 dark:text-cyan-400 font-normal text-sm mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-slate-500 dark:text-slate-500 text-sm font-normal">
                    {cert.date}
                  </p>

                  {cert.link && (
                    <p className="mt-3 text-sm text-blue-500 dark:text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      View Certificate →
                    </p>
                  )}
                </Card>
              </Wrapper>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3
            className={`text-3xl font-medium text-slate-900 dark:text-white text-center mb-8 transition-all duration-1000 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
            }`}
          >
            Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <Card
              className={`p-6 bg-gradient-to-br from-emerald-50 to-green-50
              dark:from-emerald-900/20 dark:to-green-900/20
              border-emerald-200 dark:border-emerald-800 text-center
              hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="text-4xl font-normal text-emerald-600 dark:text-emerald-400 mb-2">
                93%
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-normal">
                ML Model Accuracy
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-normal">
                Fruit Disease Detection
              </p>
            </Card>

            <Card
              className={`p-6 bg-gradient-to-br from-blue-50 to-cyan-50
              dark:from-blue-900/20 dark:to-cyan-900/20
              border-blue-200 dark:border-blue-800 text-center
              hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="text-4xl font-normal text-blue-600 dark:text-cyan-400 mb-2">
                4+
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-normal">
                Projects Deployed
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-normal">
                Live on Production
              </p>
            </Card>

            <Card
              className={`p-6 bg-gradient-to-br from-violet-50 to-purple-50
              dark:from-violet-900/20 dark:to-purple-900/20
              border-violet-200 dark:border-violet-800 text-center
              hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-110 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="text-4xl font-normal text-violet-600 dark:text-violet-400 mb-2">
                Active
              </div>
              <p className="text-slate-700 dark:text-slate-300 font-normal">
                Problem Solver
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 font-normal">
                CodeChef, LeetCode, HackerRank
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
