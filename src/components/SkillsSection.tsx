import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Workflow, 
  Bot, 
  Zap, 
  Code2, 
  Database, 
  Globe,
  Mail,
  Phone,
  Sparkles,
  BrainCircuit
} from 'lucide-react';
import aiBrain from '@/assets/ai-brain.png';
import automationGears from '@/assets/automation-gears.png';

const skills = [
  {
    category: 'GoHighLevel Development',
    icon: Workflow,
    color: 'from-cyan-500 to-blue-500',
    items: ['Funnels & Pipelines', 'Sub-Account Management', 'Snapshots', 'Workflows'],
  },
  {
    category: 'Marketing Automation',
    icon: Mail,
    color: 'from-purple-500 to-pink-500',
    items: ['Email Sequences', 'SMS Campaigns', 'Drip Campaigns', 'Multi-Channel Engagement'],
  },
  {
    category: 'AI Integration',
    icon: Bot,
    color: 'from-orange-500 to-red-500',
    items: ['ChatGPT Bots', 'SMS AI Agents', 'Chat Widgets', 'VAPI Voice Agents'],
  },
  {
    category: 'Workflow Automation',
    icon: Zap,
    color: 'from-green-500 to-emerald-500',
    items: ['Make.com Scenarios', 'Zapier Integrations', 'n8n Workflows', 'Webhooks'],
  },
  {
    category: 'Python Development',
    icon: Code2,
    color: 'from-yellow-500 to-orange-500',
    items: ['Web Scraping', 'Selenium/BeautifulSoup', 'Data Automation', 'Custom Scripting'],
  },
  {
    category: 'CRM Platforms',
    icon: Database,
    color: 'from-blue-500 to-indigo-500',
    items: ['GoHighLevel', 'Pipedrive', 'Zoho CRM', 'HubSpot'],
  },
  {
    category: 'System Integration',
    icon: Globe,
    color: 'from-teal-500 to-cyan-500',
    items: ['REST APIs', 'Payment Processing', 'Calendar Systems', 'Course Platforms'],
  },
  {
    category: 'Communication Systems',
    icon: Phone,
    color: 'from-pink-500 to-rose-500',
    items: ['Outbound Calling', 'SMS Automation', 'Appointment Booking', 'Lead Follow-up'],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="orb orb-cyan w-96 h-96 -top-48 -left-48 opacity-10" />
      <div className="orb orb-orange w-64 h-64 bottom-0 right-0 opacity-10" />
      
      {/* AI Visual Elements */}
      <motion.div 
        className="absolute top-20 right-10 w-32 h-32 opacity-20 hidden lg:block"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: 'linear' }, scale: { duration: 4, repeat: Infinity } }}
      >
        <img src={aiBrain} alt="AI Brain" className="w-full h-full object-contain" />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 w-28 h-28 opacity-20 hidden lg:block"
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        <img src={automationGears} alt="Automation" className="w-full h-full object-contain" />
      </motion.div>

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
            <BrainCircuit className="w-4 h-4" />
            MY EXPERTISE
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            Comprehensive toolkit for building end-to-end automation solutions
            <Sparkles className="w-4 h-4 text-primary" />
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30, rotateX: 15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="skill-card group relative"
            >
              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
              />
              
              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300 relative`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <skill.icon className="w-full h-full text-white" />
                {/* Icon Glow */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300`} />
              </motion.div>

              {/* Category Title */}
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {skill.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.li 
                    key={item} 
                    className="text-sm text-muted-foreground flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + itemIndex * 0.05 + 0.3 }}
                  >
                    <motion.div 
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: itemIndex * 0.2 }}
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
