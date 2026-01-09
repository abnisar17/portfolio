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
  Phone
} from 'lucide-react';

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
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="orb orb-cyan w-96 h-96 -top-48 -left-48 opacity-10" />
      <div className="orb orb-orange w-64 h-64 bottom-0 right-0 opacity-10" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">MY EXPERTISE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive toolkit for building end-to-end automation solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="skill-card group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-full h-full text-white" />
              </div>

              {/* Category Title */}
              <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {skill.category}
              </h3>

              {/* Skills List */}
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </li>
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
