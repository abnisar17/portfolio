import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { TrendingUp, CheckCircle, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';

const caseStudies = [
  {
    title: 'A2B Solutions - Fitness Agency Transformation',
    client: 'A2B Solutions',
    industry: 'Fitness Marketing',
    duration: 'Ongoing - 8+ Months',
    problem: 'New subaccount setup took 4-6 hours each with no templates, staff overwhelmed with repetitive configuration, and scaling meant hiring more people. High no-show rates and inconsistent lead follow-up across accounts.',
    solution: 'Built a library of modular GHL snapshots for specific fitness niches, implemented complete booking automation with multi-stage reminders, created automated funnels with behavior-triggered nurture sequences, and established Slack-based support infrastructure.',
    results: [
      { metric: '87%', label: 'Faster Deployment', description: 'Reduced setup from 4-6 hours to 30 minutes' },
      { metric: '150+', label: 'Sub-Accounts', description: 'Managed without additional staff' },
      { metric: '40%', label: 'No-Show Reduction', description: 'Through automated reminder system' },
      { metric: '<24h', label: 'Support Resolution', description: 'Down from 3-5 days' },
    ],
    tags: ['GoHighLevel', 'Workflow Automation', 'Booking Systems', 'CRM'],
    caseStudyLink: '#',
  },
  {
    title: 'Kerzie Consulting - AI Course Launch',
    client: 'Kerzie Consulting',
    industry: 'Education & Training',
    duration: '2 Weeks',
    problem: 'Needed a complete sales funnel for launching an AI training course with payment processing, automated email sequences, and course delivery system.',
    solution: 'Built a high-converting 3-step sales funnel with landing page, 2-step payment form, and thank you page. Implemented pre-event email sequences and integrated payment processing for fully automated course sales.',
    results: [
      { metric: '$97', label: 'Course Price', description: 'AI Fundamentals Course' },
      { metric: '100%', label: 'Automation', description: 'Hands-off course delivery' },
      { metric: '3-Step', label: 'Sales Funnel', description: 'Optimized conversion flow' },
      { metric: '2 Days', label: 'Live Sessions', description: 'Automated registration' },
    ],
    tags: ['Sales Funnel', 'Payment Integration', 'Email Automation', 'Course Platform'],
    caseStudyLink: '#',
  },
  {
    title: 'Enterprise Voice AI Implementation',
    client: 'Confidential Client',
    industry: 'Sales & Outreach',
    duration: '1 Month',
    problem: 'Manual outbound calling was expensive and inconsistent. Needed to scale lead qualification without hiring additional sales staff.',
    solution: 'Developed VAPI-powered voice AI agents for outbound calling campaigns with intelligent conversation flows, real-time CRM updates, and seamless handoff to human agents for qualified leads.',
    results: [
      { metric: '1000+', label: 'Calls/Day', description: 'Automated outreach capacity' },
      { metric: '100%', label: 'Call Success', description: 'Consistent message delivery' },
      { metric: '70%', label: 'Cost Reduction', description: 'Compared to manual calling' },
      { metric: 'Real-time', label: 'CRM Updates', description: 'Instant lead qualification' },
    ],
    tags: ['VAPI', 'AI Voice Agents', 'CRM Integration', 'Lead Qualification'],
    caseStudyLink: '#',
  },
  {
    title: 'Multi-CRM Platform Integration',
    client: '360SynergyTech',
    industry: 'Technology Services',
    duration: 'Ongoing',
    problem: 'Client data scattered across multiple CRM platforms (GoHighLevel, Pipedrive, RoofLink) causing data silos and inefficient workflows.',
    solution: 'Built unified integration layer connecting all CRM platforms with real-time data synchronization, automated data enrichment, and centralized reporting dashboard.',
    results: [
      { metric: '3+', label: 'CRM Platforms', description: 'Seamlessly integrated' },
      { metric: 'Real-time', label: 'Data Sync', description: 'Across all platforms' },
      { metric: '50%', label: 'Time Saved', description: 'On data management' },
      { metric: '1 View', label: 'Unified Dashboard', description: 'Complete visibility' },
    ],
    tags: ['API Integration', 'Data Sync', 'Python', 'Webhooks'],
    caseStudyLink: '#',
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="case-studies" className="py-12 md:py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      <div className="orb orb-cyan w-72 h-72 -bottom-36 -left-36 opacity-10" />
      <div className="orb orb-purple w-96 h-96 top-0 right-0 opacity-5" />

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
            SUCCESS STORIES
          </motion.span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-3">
            Case <span className="gradient-text">Studies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Deep dives into transformational projects and their measurable outcomes
          </p>
        </motion.div>

        {/* Case Studies Accordion */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                      {study.industry}
                    </span>
                    <span className="text-xs text-muted-foreground">{study.duration}</span>
                  </div>
                  <h3 className="font-display font-semibold text-base md:text-lg">
                    {study.title}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {expandedIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-muted-foreground flex-shrink-0" />
                  )}
                </motion.div>
              </button>

              {/* Expandable Content */}
              <motion.div
                initial={false}
                animate={{
                  height: expandedIndex === index ? 'auto' : 0,
                  opacity: expandedIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5 space-y-5">
                  {/* Problem & Solution */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20">
                      <h4 className="font-semibold text-sm text-destructive mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-destructive" />
                        The Challenge
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                      <h4 className="font-semibold text-sm text-primary mb-2 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        The Solution
                      </h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results Grid */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      Key Results
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {study.results.map((result) => (
                        <motion.div
                          key={result.label}
                          whileHover={{ scale: 1.05 }}
                          className="p-3 rounded-xl bg-secondary/30 text-center"
                        >
                          <div className="text-xl sm:text-2xl font-bold gradient-text mb-1">
                            {result.metric}
                          </div>
                          <div className="text-xs font-medium text-foreground mb-0.5">
                            {result.label}
                          </div>
                          <div className="text-[10px] text-muted-foreground">
                            {result.description}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Tags & CTA */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary/50 text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <motion.a
                      href={study.caseStudyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="btn-primary text-sm px-4 py-2 flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read Full Case Study
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;