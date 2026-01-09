import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Calendar, Briefcase } from 'lucide-react';

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
    icon: Calendar,
    title: 'Enterprise Solutions',
    description: 'Delivered 150+ sub-account implementations',
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="orb orb-purple w-72 h-72 top-0 right-0 opacity-10" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">ABOUT ME</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Turning Vision into{' '}
            <span className="gradient-text">Automation</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating intelligent systems that help businesses scale efficiently
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card p-6 lg:p-8">
              <h3 className="text-2xl font-display font-bold mb-4">
                Professional Summary
              </h3>
              <div className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <p>
                  Results-driven CRM and Automation Engineer with nearly 2 years of specialized 
                  experience in GoHighLevel platform development, marketing automation, and 
                  AI-powered workflow solutions.
                </p>
                <p>
                  Demonstrated expertise in transforming business operations through intelligent 
                  automation, reducing deployment times by 87% and managing 150+ sub-accounts 
                  without additional staffing requirements.
                </p>
                <p>
                  Proficient in building end-to-end automation ecosystems using Make.com, Zapier, 
                  n8n, and custom Python scripting to streamline operations, enhance lead management, 
                  and drive measurable business growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            {achievements.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-lg mb-1">{item.title}</h4>
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
              <h4 className="font-display font-semibold text-lg mb-4">Experience Timeline</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">CRM & Automation Engineer</p>
                    <p className="text-xs text-muted-foreground">360SynergyTech • March 2025 - Present</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm">Primary GHL Technician</p>
                    <p className="text-xs text-muted-foreground">A2B Solutions • Ongoing - 8+ Months</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 rounded-full bg-glow-orange mt-2 flex-shrink-0" />
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