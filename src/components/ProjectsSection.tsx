import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, X, Play } from 'lucide-react';

const projects = [
  {
    title: 'AI Course Sales Funnel',
    client: 'Kerzie Consulting',
    description: 'Complete 3-step sales funnel for AI training course with high-converting landing page, 2-step payment form, and automated email sequences.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60',
    technologies: ['GoHighLevel', 'Payment Integration', 'Email Automation', 'Course Delivery'],
    category: 'Sales Funnel',
    hasCode: false,
  },
  {
    title: 'Fitness Agency Automation',
    client: 'A2B Solutions',
    description: 'Managed 150+ sub-accounts for fitness marketing agency with modular snapshot system and automated booking systems.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&auto=format&fit=crop&q=60',
    technologies: ['GoHighLevel', 'Workflow Automation', 'CRM Setup', 'Analytics'],
    category: 'Agency Automation',
    hasCode: false,
  },
  {
    title: 'Voice AI Calling System',
    client: 'Enterprise Client',
    description: 'Built VAPI-powered voice AI agents for outbound calling campaigns with intelligent conversation flow and CRM integration.',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&auto=format&fit=crop&q=60',
    technologies: ['VAPI', 'AI Integration', 'GoHighLevel', 'Webhooks'],
    category: 'AI Solution',
    hasCode: false,
  },
  {
    title: 'Lead Nurture Engine',
    client: 'Marketing Agency',
    description: 'Automated funnels for promotions and seasonal campaigns with behavior-triggered nurture sequences.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=60',
    technologies: ['Email Marketing', 'SMS Campaigns', 'Lead Scoring', 'Automation'],
    category: 'Marketing Automation',
    hasCode: false,
  },
  {
    title: 'Multi-Platform CRM Integration',
    client: '360SynergyTech',
    description: 'Integrated multiple CRM platforms including GoHighLevel, Pipedrive, and RoofLink with centralized data management.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60',
    technologies: ['API Integration', 'Data Sync', 'Webhooks', 'Python'],
    category: 'System Integration',
    hasCode: true,
  },
  {
    title: 'Appointment Booking System',
    client: 'Wellness Centers',
    description: 'Complete booking automation with instant confirmations, reminder sequences, and no-show prevention workflows.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60',
    technologies: ['Calendar Integration', 'SMS Automation', 'Workflows', 'Analytics'],
    category: 'Booking System',
    hasCode: false,
  },
  {
    title: 'AI Chatbot Development',
    client: 'Multiple Clients',
    description: 'Custom ChatGPT-powered bots for lead qualification, customer support, and automated engagement.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop&q=60',
    technologies: ['ChatGPT', 'GoHighLevel', 'Lead Qualification', 'Chat Widgets'],
    category: 'AI Solution',
    hasCode: false,
  },
  {
    title: 'Data Scraping Pipeline',
    client: 'Business Intelligence',
    description: 'Python-based scraping solutions for data extraction, enrichment, and automated CRM integration.',
    image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&auto=format&fit=crop&q=60',
    technologies: ['Python', 'Selenium', 'BeautifulSoup', 'Data Pipeline'],
    category: 'Development',
    hasCode: true,
  },
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="orb orb-purple w-80 h-80 top-1/4 -right-40 opacity-10" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-medium mb-4 block">PORTFOLIO</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world automation solutions that delivered measurable results
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                  : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className="w-12 h-12 rounded-full bg-primary flex items-center justify-center"
                  >
                    <ExternalLink className="w-5 h-5 text-primary-foreground" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-primary mb-1">{project.client}</p>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 2).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="px-2 py-1 text-xs rounded-md bg-secondary/50 text-muted-foreground">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <span className="text-sm text-primary mb-2 block">{selectedProject.client}</span>
                <h3 className="text-2xl font-display font-bold mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                <h4 className="font-semibold mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary flex items-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Walkthrough Project
                  </motion.button>
                  {selectedProject.hasCode && (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-secondary flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;