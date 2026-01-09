import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users, CheckCircle, Calendar } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const stats = [
  { value: '150+', label: 'Sub-Accounts Managed', icon: Users },
  { value: '87%', label: 'Faster Deployments', icon: Zap },
  { value: '100%', label: 'Success Rate', icon: CheckCircle },
];

// Technology logos for the rotating ring
const technologies = [
  { name: 'GoHighLevel', abbr: 'GHL', color: 'from-cyan-400 to-blue-500' },
  { name: 'Make', abbr: 'Make', color: 'from-purple-400 to-purple-600' },
  { name: 'Zapier', abbr: 'Zap', color: 'from-orange-400 to-orange-600' },
  { name: 'n8n', abbr: 'n8n', color: 'from-red-400 to-pink-500' },
  { name: 'Python', abbr: 'Py', color: 'from-yellow-400 to-yellow-600' },
  { name: 'VAPI', abbr: 'VAPI', color: 'from-green-400 to-emerald-500' },
];

const HeroSection = () => {
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

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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
              Hi, I'm <span className="gradient-text glow-text whitespace-nowrap">Abu Bakar</span>
              <br />
              <span className="text-foreground">CRM & Automation</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">Engineer</span>
            </motion.h1>

            {/* Punch Line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
            >
              <span className="text-primary font-semibold">"Automate the Chaos, Amplify the Growth"</span>
              <br />
              <span className="text-base">
                Transforming businesses through GoHighLevel, n8n, Make, Zapier, 
                and AI-powered workflows. Building intelligent automation that scales.
              </span>
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
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2"
              >
                View My Work
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.a
                href="https://calendar.app.google/YLibSR7nqF7VDFHY7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Let's Talk
              </motion.a>
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
              
              {/* Technology Ring - Rotating */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-16 sm:-inset-20"
              >
                {technologies.map((tech, index) => {
                  const angle = (index / technologies.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 150;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={tech.name}
                      className={`absolute w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <span className="text-white text-xs sm:text-sm font-bold">{tech.abbr}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Decorative Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 rounded-full border-2 border-dashed border-primary/30"
              />

              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-primary/30 glow-cyan">
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 lg:mt-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="stat-card group"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              </motion.div>
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