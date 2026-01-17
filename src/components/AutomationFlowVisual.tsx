import { motion } from 'framer-motion';
import { Bot, Zap, Database, Mail, Workflow } from 'lucide-react';

const nodes = [
  { id: 1, icon: Workflow, label: 'Trigger', x: 10, y: 50 },
  { id: 2, icon: Zap, label: 'Process', x: 30, y: 30 },
  { id: 3, icon: Bot, label: 'AI Agent', x: 50, y: 50 },
  { id: 4, icon: Database, label: 'Store', x: 70, y: 30 },
  { id: 5, icon: Mail, label: 'Notify', x: 90, y: 50 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 2, to: 3 },
  { from: 3, to: 4 },
  { from: 4, to: 5 },
];

const AutomationFlowVisual = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(156, 72%, 55%)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="hsl(156, 72%, 55%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        {connections.map((conn, index) => {
          const from = nodes.find(n => n.id === conn.from)!;
          const to = nodes.find(n => n.id === conn.to)!;
          return (
            <motion.path
              key={index}
              d={`M ${from.x}% ${from.y}% Q ${(from.x + to.x) / 2}% ${Math.min(from.y, to.y) - 10}% ${to.x}% ${to.y}%`}
              fill="none"
              stroke="url(#flowGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1.5,
                delay: index * 0.3,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 2,
              }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute flex flex-col items-center"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: index * 0.2, duration: 0.5 }}
        >
          <motion.div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center backdrop-blur-sm"
            whileHover={{ scale: 1.2, rotate: 5 }}
            animate={{
              boxShadow: [
                '0 0 0px hsl(156, 72%, 55%)',
                '0 0 20px hsl(156, 72%, 55%)',
                '0 0 0px hsl(156, 72%, 55%)',
              ],
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                delay: index * 0.4,
              },
            }}
          >
            <node.icon className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="mt-2 text-xs text-muted-foreground font-medium">{node.label}</span>
        </motion.div>
      ))}

      {/* Animated Data Packets */}
      {connections.map((conn, index) => {
        const from = nodes.find(n => n.id === conn.from)!;
        const to = nodes.find(n => n.id === conn.to)!;
        return (
          <motion.div
            key={`packet-${index}`}
            className="absolute w-3 h-3 rounded-full bg-primary"
            style={{
              boxShadow: '0 0 15px hsl(156, 72%, 55%)',
            }}
            initial={{
              left: `${from.x}%`,
              top: `${from.y}%`,
              opacity: 0,
              x: '-50%',
              y: '-50%',
            }}
            animate={{
              left: [`${from.x}%`, `${to.x}%`],
              top: [`${from.y}%`, `${to.y}%`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 1,
              delay: 1 + index * 0.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
};

export default AutomationFlowVisual;
