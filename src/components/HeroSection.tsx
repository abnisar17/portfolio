import { motion } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Zap, Users, CheckCircle } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const stats = [
  { value: '150+', label: 'Sub-Accounts Managed', icon: Users },
  { value: '87%', label: 'Faster Deployments', icon: Zap },
  { value: '100%', label: 'Success Rate', icon: CheckCircle },
];

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden animated-gradient-bg"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating Orbs */}
      <div className="orb orb-cyan w-96 h-96 -top-48 -right-48 animate-float" />
      <div className="orb orb-purple w-80 h-80 -bottom-40 -left-40 animate-float" style={{ animationDelay: '2s' }} />
      <div className="orb orb-orange w-64 h-64 top-1/2 right-1/4 animate-float" style={{ animationDelay: '4s' }} />

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Available for Projects</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text glow-text">Abu Bakar</span>
              <br />
              <span className="text-foreground">CRM & Automation</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">Engineer</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              Transforming businesses through intelligent automation, AI-powered workflows, 
              and scalable GoHighLevel solutions. Building the future of marketing automation.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Glow Ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-2xl animate-pulse-glow" />
              
              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30"
              />

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 glow-cyan">
                <img
                  src={profilePhoto}
                  alt="Abu Bakar Nisar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 glass-card p-3 rounded-xl"
              >
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-8 glass-card p-3 rounded-xl"
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="stat-card"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="stat-value">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
