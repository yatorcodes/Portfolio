
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: '💻',
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'Cloud Deployment'],
      price: 'From $75/hour'
    },
    {
      icon: '📝',
      title: 'Technical Writing',
      description: 'Clear, comprehensive technical documentation and content that helps teams and users understand complex concepts.',
      features: ['API Documentation', 'User Guides', 'Technical Blogs', 'Code Comments'],
      price: 'From $50/hour'
    },
    {
      icon: '🎯',
      title: 'Technology Consulting',
      description: 'Strategic guidance on technology choices, architecture decisions, and development best practices.',
      features: ['Tech Stack Selection', 'Code Reviews', 'Architecture Planning', 'Performance Optimization'],
      price: 'From $100/hour'
    },
    {
      icon: '🚀',
      title: 'Project Management',
      description: 'Complete project oversight from conception to deployment, ensuring timely delivery and quality results.',
      features: ['Project Planning', 'Team Coordination', 'Quality Assurance', 'Client Communication'],
      price: 'Custom Pricing'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      image: '👩‍💼',
      text: 'Exceptional work on our e-commerce platform. The code quality and documentation were outstanding.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Digital Solutions',
      image: '👨‍💻',
      text: 'Great technical writing skills. Made our complex API documentation clear and user-friendly.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'StartupXYZ',
      image: '👩‍🚀',
      text: 'Perfect consulting on our tech stack. Saved us months of development time with the right choices.',
      rating: 5
    }
  ];

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Freelance <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional development, writing, and consulting services to help your business succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="glass border-white/20 hover-lift">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold gradient-text">{service.price}</span>
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
                    Get Started
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">How I Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your needs and project requirements' },
              { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
              { step: '03', title: 'Development', description: 'Building your solution with regular updates' },
              { step: '04', title: 'Delivery', description: 'Testing, deployment, and ongoing support' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Client Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-3xl">{testimonial.image}</div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
