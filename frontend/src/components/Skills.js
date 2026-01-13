import React, { useEffect, useState } from 'react';
import { Card } from './ui/card';
import * as Icons from 'lucide-react';
import { skills } from '../mockData';

const Skills = () => {
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

    const element = document.querySelector('#skills');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const getIcon = (iconName) => {
    const IconMap = {
      'code': Icons.Code,
      'coffee': Icons.Atom,
      'code-2': Icons.Code2,
      'file-code': Icons.FileCode,
      'palette': Icons.Palette,
      'database': Icons.Database,
      'cpu': Icons.Cpu,
      'brain': Icons.Brain,
      'bot': Icons.Bot,
      'github': Icons.Github,
      'cloud': Icons.Cloud,
      'terminal': Icons.Terminal,
      'table': Icons.Table,
      'notebook': Icons.BookOpen,
      'bar-chart': Icons.BarChart,
      'git-branch': Icons.GitBranch,
      'trophy': Icons.Trophy
    };
    return IconMap[iconName] || Icons.Circle;
  };

  const skillCategories = [
    { title: 'Programming Languages', items: skills.languages, color: 'blue' },
    { title: 'Core Concepts', items: skills.concepts, color: 'violet' },
    { title: 'Tools & Platforms', items: skills.tools, color: 'emerald' },
    { title: 'Problem Solving', items: skills.problemSolving, color: 'orange' }
  ];

  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    violet: 'from-violet-500 to-purple-500',
    emerald: 'from-emerald-500 to-green-500',
    orange: 'from-orange-500 to-rose-500'
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className={`p-6 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-1 h-8 bg-gradient-to-b ${colorClasses[category.color]} rounded-full`}></div>
                <h3 className="text-xl font-normal text-slate-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.items.map((skill, skillIdx) => {
                  const Icon = getIcon(skill.icon);
                  return (
                    <div
                      key={skillIdx}
                      className="flex flex-col items-center justify-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 transition-all duration-300 group cursor-pointer hover:scale-110 hover:-translate-y-2"
                    >
                      <Icon className="h-8 w-8 mb-2 text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors group-hover:rotate-12 group-hover:scale-125" />
                      <span className="text-sm font-normal text-slate-700 dark:text-slate-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
