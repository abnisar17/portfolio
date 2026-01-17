import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sparkles, Calendar, TrendingUp, Users, Clock, Bot, Workflow } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';
import aiAutomationHero from '@/assets/ai-automation-hero.jpg';
import AutomationFlowVisual from './AutomationFlowVisual';

const stats = [
  { value: '200+', label: 'CRM Accounts Managed', icon: Users },
  { value: '87%', label: 'Reduced Time Upto', icon: Clock },
  { value: '100%', label: 'Success Rate', icon: TrendingUp },
];

// Technology logos for the rotating ring - updated to match green theme
const technologies = [
  { name: 'GoHighLevel', abbr: 'GHL', color: 'from-emerald-400 to-teal-500' },
  { name: 'Make', abbr: 'Make', color: 'from-teal-400 to-cyan-500' },
  { name: 'Zapier', abbr: 'Zap', color: 'from-amber-400 to-orange-500' },
  { name: 'n8n', abbr: 'n8n', color: 'from-rose-400 to-pink-500' },
  { name: 'Python', abbr: 'Py', color: 'from-lime-400 to-green-500' },
  { name: 'VAPI', abbr: 'VAPI', color: 'from-green-400 to-emerald-600' },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* AI Automation Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={aiAutomationHero} 
          alt="AI Automation Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Orbs - Enhanced with green theme */}
      <div className="absolute w-[600px] h-[600px] -top-64 -right-64 rounded-full bg-gradient-to-br from-emerald-500/30 via-teal-400/20 to-transparent blur-3xl animate-float" />
      <div className="absolute w-[500px] h-[500px] -bottom-48 -left-48 rounded-full bg-gradient-to-tr from-green-500/25 via-primary/20 to-transparent blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute w-96 h-96 top-1/4 right-1/4 rounded-full bg-gradient-to-br from-lime-400/15 via-emerald-400/10 to-transparent blur-2xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute w-72 h-72 bottom-1/4 left-1/3 rounded-full bg-gradient-to-tl from-teal-400/20 via-cyan-400/10 to-transparent blur-2xl animate-float" style={{ animationDelay: '3s' }} />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-30, 30, -30],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4"
            >
              Hi, I'm <span className="gradient-text glow-text whitespace-nowrap">Abu Bakar</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-foreground mb-2"
            >
              CRM & Automation Engineer
            </motion.h2>

            {/* Punch Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl text-primary font-semibold italic mb-3">
                "Automate the Chaos, Amplify the Growth"
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Transforming businesses through GoHighLevel, n8n, Make, Zapier, 
                and AI-powered workflows. Building intelligent automation that scales.
              </p>
            </motion.div>

            {/* CTA Buttons - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(52, 211, 153, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary flex items-center justify-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.a
                href="https://calendar.app.google/YLibSR7nqF7VDFHY7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(52, 211, 153, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2 group"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Let's Talk</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image with Tech Ring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Outer Glow - Enhanced */}
              <div className="absolute -inset-12 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400 opacity-25 blur-3xl animate-pulse-glow" />
              <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 to-emerald-500/20 blur-2xl animate-pulse" />
              
              {/* Technology Ring - Rotating */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
                style={{ width: '420px', height: '420px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              >
                {technologies.map((tech, index) => {
                  const angle = (index / technologies.length) * 2 * Math.PI - Math.PI / 2;
                  const radius = 180;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <motion.div
                      key={tech.name}
                      className={`absolute w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-xl shadow-black/30`}
                      style={{
                        left: `calc(50% + ${x}px - 28px)`,
                        top: `calc(50% + ${y}px - 28px)`,
                      }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.3, zIndex: 10 }}
                    >
                      <span className="text-white text-sm sm:text-base font-bold">{tech.abbr}</span>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute rounded-full border-2 border-dashed border-primary/20"
                style={{ width: '380px', height: '380px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />
              <div 
                className="absolute rounded-full border border-primary/10"
                style={{ width: '340px', height: '340px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
              />

              {/* Profile Image - Enhanced border */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-emerald-400/50 shadow-2xl shadow-emerald-500/30">
                <div className="absolute inset-0 rounded-full border-4 border-primary/30 animate-pulse" />
                <img
                  src={profilePhoto}
                  alt="Abu Bakar Nisar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-emerald-400/10" />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 glass-card p-3 rounded-xl shadow-lg"
              >
                <Zap className="w-6 h-6 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-8 -left-4 glass-card p-3 rounded-xl shadow-lg"
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section - Better positioned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="stat-card group cursor-pointer"
            >
              <div className="relative z-10 flex items-center justify-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-xl blur-xl group-hover:bg-primary/30 transition-all duration-500" />
                  <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-500">
                    <stat.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Automation Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="mt-8"
        >
          <div className="glass-card p-4 rounded-2xl">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">Live Automation Flow</span>
            </div>
            <AutomationFlowVisual />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
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