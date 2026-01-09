import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Briefcase, Target, Rocket, Code2 } from 'lucide-react';

const achievements = [
  {
    icon: Briefcase,
    title: '2+ Years Experience',
    description: 'Specialized in GoHighLevel, Make, n8n & Automation',
  },
  {
    icon: Award,
    title: 'Multiple CRM Platforms',
    description: 'GoHighLevel, Pipedrive, RoofLink, Zoho, HubSpot',
  },
  {
    icon: Target,
    title: 'Enterprise Solutions',
    description: 'Delivered 200+ CRM account implementations',
  },
];

const highlights = [
  { icon: Rocket, label: 'Fast Delivery' },
  { icon: Code2, label: 'Clean Code' },
  { icon: Target, label: 'Results Driven' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="orb orb-purple w-72 h-72 top-0 right-0 opacity-10" />
      <div className="orb orb-cyan w-64 h-64 bottom-0 left-0 opacity-5" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            ABOUT ME
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            Turning Vision into{' '}
            <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Passionate about creating intelligent systems that help businesses scale efficiently
          </p>
        </motion.div>

        {/* Highlight Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-card"
            >
              <item.icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 lg:p-8 h-full">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Briefcase className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-bold">
                  Professional Summary
                </h3>
              </div>
              <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
                <p>
                  Results-driven <span className="text-foreground font-medium">CRM and Automation Engineer</span> with nearly 2 years of specialized 
                  experience in GoHighLevel platform development, marketing automation, and 
                  AI-powered workflow solutions.
                </p>
                <p>
                  Demonstrated expertise in transforming business operations through intelligent 
                  automation, <span className="text-primary font-medium">reducing deployment times by 87%</span> and managing 200+ CRM accounts 
                  without additional staffing requirements.
                </p>
                <p>
                  Proficient in building end-to-end automation ecosystems using <span className="text-foreground font-medium">Make.com, Zapier, 
                  n8n, and custom Python</span> scripting to streamline operations, enhance lead management, 
                  and drive measurable business growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Achievements & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {/* Achievement Cards */}
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="glass-card p-4 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-base mb-1">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Calendar className="w-4 h-4 text-accent" />
                </div>
                <h4 className="font-display font-semibold text-base">Experience Timeline</h4>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-4 group">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="absolute top-4 left-1.5 w-px h-8 bg-border" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">CRM & Automation Engineer</p>
                    <p className="text-xs text-muted-foreground">360SynergyTech • March 2025 - Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-accent mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                    <div className="absolute top-4 left-1.5 w-px h-8 bg-border" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">Primary GHL Technician</p>
                    <p className="text-xs text-muted-foreground">A2B Solutions • Ongoing - 8+ Months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 group">
                  <div className="w-3 h-3 rounded-full bg-glow-orange mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform" />
                  <div>
                    <p className="font-medium text-sm">Freelance GHL & Automation</p>
                    <p className="text-xs text-muted-foreground">Fiverr • Dec 2023 - Jan 2025</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;