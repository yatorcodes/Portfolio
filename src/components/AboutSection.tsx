
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const timeline = [
    {
      year: '2018',
      title: 'Started Coding Journey',
      description: 'Began learning programming with Python and JavaScript',
      icon: '💻'
    },
    {
      year: '2020',
      title: 'First Full-Stack Project',
      description: 'Built my first complete web application using React and Node.js',
      icon: '🚀'
    },
    {
      year: '2021',
      title: 'Freelancing Began',
      description: 'Started taking on freelance projects and consulting work',
      icon: '💼'
    },
    {
      year: '2022',
      title: 'Technical Writing',
      description: 'Started writing technical articles and blog posts',
      icon: '✍️'
    },
    {
      year: '2024',
      title: 'Senior Developer',
      description: 'Currently working as a senior full-stack developer and consultant',
      icon: '⭐'
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer, freelance consultant, and technical writer who loves creating 
            innovative solutions and sharing knowledge through code and content.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Story</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey into technology started with a simple curiosity about how websites work. 
                What began as a hobby quickly evolved into a passion, and eventually into a full-fledged career 
                spanning development, consulting, and technical writing.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, I help businesses build robust digital solutions while sharing my knowledge 
                through articles, tutorials, and mentoring. I believe in the power of code to solve 
                real-world problems and the importance of clear communication in tech.
              </p>
            </div>

            <div className="glass p-8 rounded-2xl hover-lift">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">What I Do</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🔧</span>
                  <span>Full-stack web application development</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">📝</span>
                  <span>Technical writing and documentation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">💡</span>
                  <span>Technology consulting and architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎓</span>
                  <span>Code reviews and mentoring</span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-center mb-8 gradient-text">My Journey</h3>
            {timeline.map((item, index) => (
              <Card key={index} className="glass border-white/20 hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-semibold text-purple-400">{item.year}</span>
                      </div>
                      <h4 className="font-semibold text-lg mb-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
