import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Workflow, 
  Bot, 
  Settings, 
  PenTool, 
  Headphones, 
  Layers,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Workflow,
    title: 'GoHighLevel Development',
    description: 'Complete GHL setup and configuration including funnels, pipelines, workflows, and sub-account management.',
    features: ['Funnel Building', 'Pipeline Setup', 'Workflow Automation', 'Snapshot Creation'],
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description: 'Build intelligent AI agents for SMS, voice, and chat that qualify leads and engage customers 24/7.',
    features: ['ChatGPT Integration', 'VAPI Voice Agents', 'SMS Bots', 'Lead Qualification'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Settings,
    title: 'Workflow Automation',
    description: 'Connect your tools and automate repetitive tasks using Make.com, Zapier, n8n, and custom solutions.',
    features: ['Make.com Scenarios', 'Zapier Integrations', 'n8n Workflows', 'API Connections'],
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Layers,
    title: 'CRM Implementation',
    description: 'Full CRM setup and configuration with data migration, custom fields, and automated workflows.',
    features: ['GoHighLevel Setup', 'Data Migration', 'Custom Fields', 'Pipeline Management'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: PenTool,
    title: 'Funnel Building',
    description: 'High-converting sales funnels with landing pages, payment integration, and automated follow-ups.',
    features: ['Landing Pages', 'Payment Forms', 'Thank You Pages', 'A/B Testing'],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Ongoing support for your automation systems with troubleshooting, optimization, and maintenance.',
    features: ['Bug Fixes', 'System Optimization', 'Performance Monitoring', 'Training'],
    color: 'from-blue-500 to-indigo-500',
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="orb orb-orange w-80 h-80 -top-40 -right-40 opacity-10" />
      <div className="orb orb-cyan w-64 h-64 bottom-0 left-0 opacity-10" />

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
            WHAT I OFFER
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            End-to-end automation solutions to scale your business efficiently
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 group"
            >
              {/* Icon */}
              <motion.div 
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-3 mb-5 group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 5 }}
              >
                <service.icon className="w-full h-full text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? Let's discuss your specific requirements.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center gap-2"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get a Custom Quote
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;