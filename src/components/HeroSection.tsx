
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '1s'}} />
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 p-1 animate-scale-in">
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-gray-600 dark:text-gray-300">
                  👨‍💻
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 blur-md opacity-60 animate-pulse" />
            </div>
          </div>

          {/* Hero Text */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="gradient-text">Full-Stack</span><br />
            <span className="text-foreground">Developer & Writer</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            Creating digital experiences through code, crafting compelling content through words, and building solutions through freelance consulting 🚀
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 hover-lift">
              💼 Hire Me
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/20 hover:bg-white/10 hover-lift">
              📖 Read My Blog
            </Button>
            <Button size="lg" variant="outline" className="glass border-white/20 hover:bg-white/10 hover-lift">
              📄 Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <a
              href="#"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-3 glass rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
