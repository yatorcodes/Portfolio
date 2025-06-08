
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80',
      category: 'development',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'SaaS Dashboard',
      description: 'Modern dashboard application with real-time analytics and user management',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&q=80',
      category: 'development',
      technologies: ['Vue.js', 'Express', 'MongoDB', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Technical Blog',
      description: 'Personal blog featuring in-depth tutorials and industry insights',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80',
      category: 'writing',
      technologies: ['Next.js', 'MDX', 'Tailwind'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Mobile App UI/UX',
      description: 'Complete design system and mobile app interface for fintech startup',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80',
      category: 'freelance',
      technologies: ['Figma', 'React Native', 'Design Systems'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'API Documentation',
      description: 'Comprehensive API documentation and developer guides for enterprise client',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
      category: 'writing',
      technologies: ['Technical Writing', 'API Design', 'Documentation'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time collaboration features',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&q=80',
      category: 'personal',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'development', label: 'Development' },
    { id: 'writing', label: 'Writing' },
    { id: 'freelance', label: 'Freelance' },
    { id: 'personal', label: 'Personal' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of development projects, writing samples, and freelance work that demonstrates my expertise
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={`
                ${activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0' 
                  : 'glass border-white/20 hover:bg-white/10'
                }
                transition-all duration-300 hover:scale-105
              `}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="glass border-white/20 overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Mail className="w-4 h-4 mr-2" />
                      View
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
