import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Server, Zap, Database, BarChart } from 'lucide-react';

const ArchitectureSection = () => {
  const blocks = [
    { icon: <Smartphone />, name: "Mobile Applications", delay: 0 },
    { icon: <Server />, name: "API Layer", delay: 0.2 },
    { icon: <Zap />, name: "Matching Engine", delay: 0.4 },
    { icon: <Database />, name: "Marketplace Core", delay: 0.6 },
    { icon: <BarChart />, name: "Analytics Infrastructure", delay: 0.8 },
  ];

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Enterprise-Grade Architecture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Built for scalability, reliability, and real-time performance.</p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 -translate-y-1/2 z-0"></div>

          {blocks.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: block.delay, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center mb-8 md:mb-0 group"
            >
              <div className="w-24 h-24 rounded-2xl glass-card bg-[#050816] flex items-center justify-center border-primary/30 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(109,93,246,0.3)] transition-all mb-4 relative">
                {/* Connector dots for mobile */}
                {idx !== blocks.length - 1 && (
                  <div className="md:hidden absolute -bottom-8 w-1 h-8 bg-gradient-to-b from-primary/50 to-transparent"></div>
                )}
                
                {React.cloneElement(block.icon, { className: "w-10 h-10 text-white group-hover:text-primary transition-colors" })}
              </div>
              <div className="text-sm font-semibold text-center max-w-[120px]">{block.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-20">
          {['Scalability', 'Reliability', 'Security', 'Performance', 'Real-time'].map((feature, idx) => (
            <div key={idx} className="glass-card py-3 px-4 text-center border-white/5 bg-white/5 text-gray-300 text-sm font-medium">
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
