import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Mail, 
  ExternalLink,
  Heart,
  ArrowUp
} from 'lucide-react';

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

      <div className="container-custom relative z-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
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
              <span className="gradient-text">Abu Bakar</span>
              <span className="text-foreground">Nisar</span>
            </motion.a>
            <p className="text-muted-foreground max-w-md mb-6">
              CRM & Automation Engineer transforming businesses through intelligent automation, 
              AI-powered workflows, and scalable GoHighLevel solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors"
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
            <ul className="space-y-3 text-muted-foreground">
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
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50">
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
