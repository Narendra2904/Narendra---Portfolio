import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-normal mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Narendra Yenagandula
            </h3>
            <p className="text-slate-400 text-sm font-normal">
              Building innovative solutions with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-normal mb-3">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-normal hover:translate-x-2 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-normal mb-3">Connect</h4>
            <div className="flex gap-4">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:-translate-y-2 hover:rotate-12 hover:scale-110"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm font-normal">
              © {currentYear} Narendra Yenagandula. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-1 font-normal">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> by Narendra
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
