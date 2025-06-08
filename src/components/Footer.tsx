
const Footer = () => {
  return (
    <footer className="py-12 px-4 glass border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">Portfolio</div>
            <p className="text-muted-foreground text-sm">
              Full-Stack Developer • Technical Writer • Freelance Consultant
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm mb-2">
              © 2024 Your Name. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
