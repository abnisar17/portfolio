import { motion } from 'framer-motion';
import { useMemo } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface Connection {
  id: string;
  from: Node;
  to: Node;
}

const AINetworkVisual = () => {
  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 15 + (i % 4) * 25 + Math.random() * 10,
      y: 20 + Math.floor(i / 4) * 30 + Math.random() * 10,
      size: Math.random() * 8 + 6,
      delay: i * 0.1,
    }));
  }, []);

  const connections = useMemo<Connection[]>(() => {
    const conns: Connection[] = [];
    nodes.forEach((node, i) => {
      // Connect to nearby nodes
      nodes.slice(i + 1).forEach((otherNode) => {
        const distance = Math.sqrt(
          Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
        );
        if (distance < 35) {
          conns.push({
            id: `${node.id}-${otherNode.id}`,
            from: node,
            to: otherNode,
          });
        }
      });
    });
    return conns;
  }, [nodes]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Connection Lines */}
        {connections.map((conn, index) => (
          <motion.line
            key={conn.id}
            x1={`${conn.from.x}%`}
            y1={`${conn.from.y}%`}
            x2={`${conn.to.x}%`}
            y2={`${conn.to.y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
            transition={{
              pathLength: { duration: 2, delay: index * 0.1 },
              opacity: { duration: 3, repeat: Infinity, delay: index * 0.2 },
            }}
          />
        ))}

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(156, 72%, 55%)" />
            <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
          </linearGradient>
          <radialGradient id="nodeGradient">
            <stop offset="0%" stopColor="hsl(156, 72%, 65%)" />
            <stop offset="100%" stopColor="hsl(156, 72%, 45%)" />
          </radialGradient>
        </defs>
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background: 'radial-gradient(circle, hsl(156, 72%, 65%) 0%, hsl(156, 72%, 45%) 100%)',
            boxShadow: '0 0 15px hsl(156, 72%, 55%)',
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3,
            delay: node.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Animated Data Pulses */}
      {connections.slice(0, 5).map((conn, index) => (
        <motion.div
          key={`pulse-${conn.id}`}
          className="absolute w-2 h-2 rounded-full bg-primary"
          style={{
            boxShadow: '0 0 10px hsl(156, 72%, 55%)',
          }}
          initial={{
            left: `${conn.from.x}%`,
            top: `${conn.from.y}%`,
            opacity: 0,
          }}
          animate={{
            left: [`${conn.from.x}%`, `${conn.to.x}%`],
            top: [`${conn.from.y}%`, `${conn.to.y}%`],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            delay: index * 1.5,
            repeat: Infinity,
            repeatDelay: 3,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

export default AINetworkVisual;
