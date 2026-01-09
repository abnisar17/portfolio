import { motion } from 'framer-motion';
import { ArrowRight, Zap, Sparkles, Calendar, TrendingUp, Users, Clock } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const stats = [
  { value: '200+', label: 'CRM Accounts Managed', icon: Users },
  { value: '87%', label: 'Reduced Time Upto', icon: Clock },
  { value: '100%', label: 'Success Rate', icon: TrendingUp },
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
      className="relative min-h-screen flex items-center overflow-hidden animated-gradient-bg pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Floating Orbs */}
      <div className="orb orb-cyan w-[500px] h-[500px] -top-64 -right-64 animate-float" />
      <div className="orb orb-purple w-96 h-96 -bottom-48 -left-48 animate-float" style={{ animationDelay: '2s' }} />
      <div className="orb orb-orange w-72 h-72 top-1/3 right-1/3 animate-float opacity-10" style={{ animationDelay: '4s' }} />

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

          {/* Right Column - Profile Image with Tech Ring */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Profile Image Container */}
            <div className="relative">
              {/* Outer Glow */}
              <div className="absolute -inset-8 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-3xl animate-pulse-glow" />
              
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

              {/* Profile Image */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/40 glow-cyan">
                <img
                  src={profilePhoto}
                  alt="Abu Bakar Nisar"
                  className="w-full h-full object-cover object-top"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
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
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 pb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
              className="stat-card group"
            >
              <div className="flex items-center justify-center gap-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                >
                  <stat.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
                </motion.div>
                <div className="text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
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