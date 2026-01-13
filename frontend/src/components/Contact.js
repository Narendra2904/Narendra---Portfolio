import React, { useState, useEffect } from 'react';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

    const element = document.querySelector('#contact');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be replaced with backend API
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-normal">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <Card className="p-8 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:shadow-2xl transition-all duration-500 hover:scale-105">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-normal text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-cyan-400 transition-all duration-300 hover:scale-105"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-normal text-slate-700 dark:text-slate-300 flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-cyan-400 transition-all duration-300 hover:scale-105"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-normal text-slate-700 dark:text-slate-300 flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Subject
                </label>
                <Input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-cyan-400 transition-all duration-300 hover:scale-105"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-normal text-slate-700 dark:text-slate-300">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  required
                  rows={6}
                  className="bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-600 focus:border-blue-600 dark:focus:border-cyan-400 resize-none transition-all duration-300 hover:scale-105"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 text-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
              >
                <Send className="mr-2 h-4 w-4 group-hover:rotate-12 group-hover:scale-125 transition-transform" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
