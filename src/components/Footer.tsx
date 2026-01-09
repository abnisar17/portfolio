import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink,
  Heart,
  ArrowUp
} from 'lucide-react';

// Custom social icons
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/abnisar17' },
  { icon: Github, label: 'GitHub', href: 'https://github.com/abnisar17' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: TwitterIcon, label: 'Twitter/X', href: 'https://x.com' },
  { icon: Mail, label: 'Email', href: 'mailto:abnisar1717@gmail.com' },
  { icon: ExternalLink, label: 'Upwork', href: 'https://upwork.com' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t border-border/50">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background to-secondary/10" />
      <div className="orb orb-cyan w-64 h-64 -bottom-32 -left-32 opacity-5" />
      <div className="orb orb-purple w-48 h-48 -bottom-24 right-0 opacity-5" />

      <div className="container-custom relative z-10 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-2 text-2xl font-display font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text whitespace-nowrap">Abu Bakar</span>
              <span className="text-foreground">Nisar</span>
            </motion.a>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              CRM & Automation Engineer transforming businesses through GoHighLevel, 
              n8n, Make, Zapier, and AI-powered workflow solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2.5 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                    title={social.label}
                  >
                    <IconComponent />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>GoHighLevel Development</li>
              <li>AI Agent Creation</li>
              <li>Workflow Automation</li>
              <li>CRM Implementation</li>
              <li>Funnel Building</li>
              <li>Technical Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 border-t border-border/50">
          <p className="text-sm text-muted-foreground flex items-center gap-1 mb-4 md:mb-0">
            © {new Date().getFullYear()} Abu Bakar Nisar. Built with{' '}
            <Heart className="w-4 h-4 text-primary inline" /> and automation.
          </p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowUp className="w-4 h-4" />
            Back to Top
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;