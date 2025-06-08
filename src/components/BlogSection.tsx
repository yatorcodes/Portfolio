
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications',
      excerpt: 'Learn the best practices and patterns for creating maintainable React applications that scale with your team.',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
      tags: ['React', 'JavaScript', 'Architecture']
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that will shape the future of web development in the next decade.',
      date: '2024-01-10',
      readTime: '12 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80',
      tags: ['Web Development', 'Trends', 'Technology']
    },
    {
      id: 3,
      title: 'Freelancing as a Developer',
      excerpt: 'Tips and strategies for building a successful freelance development career, from finding clients to pricing projects.',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80',
      tags: ['Freelancing', 'Career', 'Business']
    },
    {
      id: 4,
      title: 'TypeScript Best Practices',
      excerpt: 'A comprehensive guide to writing better TypeScript code with practical examples and common pitfalls to avoid.',
      date: '2023-12-28',
      readTime: '15 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80',
      tags: ['TypeScript', 'Best Practices', 'Development']
    },
    {
      id: 5,
      title: 'API Design Principles',
      excerpt: 'Essential principles for designing RESTful APIs that are intuitive, scalable, and developer-friendly.',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Backend',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&q=80',
      tags: ['API', 'Backend', 'Design']
    },
    {
      id: 6,
      title: 'Technical Writing for Developers',
      excerpt: 'How to communicate complex technical concepts clearly and effectively through writing and documentation.',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Writing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80',
      tags: ['Technical Writing', 'Documentation', 'Communication']
    }
  ];

  const categories = ['All', 'Development', 'Technology', 'Career', 'Backend', 'Writing'];

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-950/20 dark:to-blue-950/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thoughts, tutorials, and insights on development, technology, and the freelance journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="glass border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          <Card className="glass border-white/20 overflow-hidden hover-lift">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                  <span>{blogPosts[0].date}</span>
                  <span>•</span>
                  <span>{blogPosts[0].readTime}</span>
                  <span>•</span>
                  <span className="text-purple-400">{blogPosts[0].category}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{blogPosts[0].title}</h3>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 w-fit">
                  Read More
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="glass border-white/20 overflow-hidden hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-black/50 text-white text-xs rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" className="p-0 h-auto text-purple-400 hover:text-purple-300">
                  Read more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glass border-white/20 hover:bg-white/10">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
