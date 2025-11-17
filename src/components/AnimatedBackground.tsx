import { motion } from "motion/react";

export function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <motion.path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.3, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}

export function DataParticles() {
  const dataSymbols = ["$", "%", "↑", "↓", "•", "+", "×"];
  const dataNumbers = ["42", "87", "156", "2.4K", "99%", "3.7", "1.2M"];
  
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 15 + Math.random() * 10,
    content: Math.random() > 0.5 
      ? dataSymbols[Math.floor(Math.random() * dataSymbols.length)]
      : dataNumbers[Math.floor(Math.random() * dataNumbers.length)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-white/40 text-xs font-mono"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0, 0.6, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {particle.content}
        </motion.div>
      ))}
    </div>
  );
}

export function AnimatedChart() {
  const bars = [
    { height: 60, delay: 0 },
    { height: 85, delay: 0.2 },
    { height: 45, delay: 0.4 },
    { height: 92, delay: 0.6 },
    { height: 70, delay: 0.8 },
  ];

  return (
    <div className="absolute bottom-20 right-20 opacity-10 pointer-events-none hidden lg:block">
      <div className="flex items-end gap-3 h-32">
        {bars.map((bar, i) => (
          <motion.div
            key={i}
            className="w-8 bg-yellow-400 rounded-t"
            initial={{ height: 0 }}
            animate={{
              height: `${bar.height}%`,
            }}
            transition={{
              duration: 1.5,
              delay: bar.delay,
              repeat: Infinity,
              repeatType: "reverse",
              repeatDelay: 2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export function TrendLine() {
  return (
    <div className="absolute top-1/4 left-10 opacity-10 pointer-events-none hidden lg:block">
      <svg width="200" height="100" viewBox="0 0 200 100">
        <motion.path
          d="M 0 80 Q 50 60, 100 40 T 200 20"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-yellow-400"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
        {[0, 50, 100, 150, 200].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={80 - (i * 15)}
            r="4"
            fill="currentColor"
            className="text-yellow-400"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 1], opacity: [0, 1, 0.8] }}
            transition={{
              duration: 0.5,
              delay: i * 0.6,
              repeat: Infinity,
              repeatDelay: 2.5,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function DataFlow() {
  const nodes = [
    { x: 20, y: 30, size: 12 },
    { x: 50, y: 20, size: 10 },
    { x: 80, y: 40, size: 14 },
    { x: 40, y: 60, size: 8 },
    { x: 70, y: 70, size: 11 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines */}
        {nodes.map((node, i) => {
          const nextNode = nodes[(i + 1) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="currentColor"
              strokeWidth="1"
              className="text-white"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.3 }}
              transition={{
                duration: 2,
                delay: i * 0.3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r={node.size}
            fill="currentColor"
            className="text-yellow-400"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              delay: i * 0.4,
              repeat: Infinity,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function FloatingDashboardElements() {
  const elements = [
    { type: "pie", x: 15, y: 15, rotation: 0 },
    { type: "bar", x: 85, y: 75, rotation: 0 },
    { type: "line", x: 10, y: 80, rotation: 0 },
    { type: "pie", x: 90, y: 20, rotation: 45 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [element.rotation, element.rotation + 360, element.rotation],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          {element.type === "pie" && (
            <svg width="60" height="60" viewBox="0 0 60 60">
              <circle
                cx="30"
                cy="30"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="25 100"
                className="text-yellow-500"
              />
              <circle
                cx="30"
                cy="30"
                r="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="50 100"
                strokeDashoffset="-25"
                className="text-blue-500"
              />
            </svg>
          )}
          {element.type === "bar" && (
            <div className="flex items-end gap-1 h-12">
              <div className="w-2 h-8 bg-yellow-500/30"></div>
              <div className="w-2 h-10 bg-yellow-500/30"></div>
              <div className="w-2 h-6 bg-yellow-500/30"></div>
              <div className="w-2 h-11 bg-yellow-500/30"></div>
            </div>
          )}
          {element.type === "line" && (
            <svg width="50" height="30" viewBox="0 0 50 30">
              <polyline
                points="0,25 10,20 20,15 30,18 40,10 50,5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-yellow-500/30"
              />
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export function KPICounter() {
  return (
    <div className="absolute top-1/3 right-10 opacity-10 pointer-events-none hidden xl:block">
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
        <div className="text-xs text-white/60 uppercase tracking-wider mb-1">
          Revenue Growth
        </div>
        <motion.div
          className="text-2xl font-mono text-yellow-400"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            +24.7%
          </motion.span>
        </motion.div>
        <div className="text-xs text-green-400 mt-1">↑ Trending up</div>
      </div>
    </div>
  );
}
