import React from 'react';
import { motion } from 'framer-motion';

const RoadmapSection = () => {
  const phases = [
    { phase: "Phase 1", title: "Marketplace MVP", status: "completed" },
    { phase: "Phase 2", title: "Payments & Transactions", status: "current" },
    { phase: "Phase 3", title: "AI Matching Engine", status: "upcoming" },
    { phase: "Phase 4", title: "Predictive Analytics", status: "upcoming" },
    { phase: "Phase 5", title: "Enterprise Platform", status: "upcoming" },
    { phase: "Phase 6", title: "National Network", status: "upcoming" }
  ];

  return (
    <section className="py-24 bg-[#030510]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Product Roadmap</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Our path to redefining the workforce economy.</p>
        </div>

        <div className="relative overflow-x-auto pb-8 hide-scrollbar">
          <div className="min-w-[1000px] relative px-4">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-white/10 -translate-y-1/2 z-0"></div>

            <div className="flex justify-between items-center relative z-10">
              {phases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center group w-32"
                >
                  <div className="text-xs font-mono text-gray-500 mb-4">{phase.phase}</div>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center border-4 transition-all ${
                    phase.status === 'completed' ? 'bg-accent border-[#030510]' :
                    phase.status === 'current' ? 'bg-[#030510] border-primary shadow-[0_0_15px_rgba(109,93,246,0.8)]' :
                    'bg-[#030510] border-gray-700 group-hover:border-gray-500'
                  }`}>
                    {phase.status === 'completed' && <div className="w-2 h-2 rounded-full bg-[#030510]"></div>}
                    {phase.status === 'current' && <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>}
                  </div>
                  
                  <div className={`mt-4 text-sm font-medium text-center ${
                    phase.status === 'completed' ? 'text-accent' :
                    phase.status === 'current' ? 'text-white' :
                    'text-gray-500 group-hover:text-gray-300'
                  }`}>
                    {phase.title}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
