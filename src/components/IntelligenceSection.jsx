import React from 'react';
import { motion } from 'framer-motion';

const IntelligenceSection = () => {
  const cards = [
    { title: "AI-Powered Matching", icon: "🧠" },
    { title: "Predictive Analytics", icon: "📊" },
    { title: "Demand Forecasting", icon: "📈" },
    { title: "Dynamic Resource Allocation", icon: "🔄" },
    { title: "Workforce Intelligence", icon: "💡" },
    { title: "Enterprise Solutions", icon: "🏢" }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Future-Ready <br />
              <span className="text-gradient">Marketplace Intelligence</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Leveraging advanced algorithms to predict demand, optimize supply, and deliver a frictionless workforce discovery experience.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              {cards.map((card, idx) => (
                <div key={idx} className="glass-card p-4 border-white/5 bg-white/5 flex items-center gap-3 hover:border-primary/50 transition-colors cursor-default">
                  <span className="text-2xl">{card.icon}</span>
                  <span className="text-sm font-medium text-gray-200">{card.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px]"
          >
            {/* AI Core Visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 border border-primary/20 rounded-full flex items-center justify-center relative animate-[spin_20s_linear_infinite]">
                <div className="absolute w-4 h-4 bg-primary rounded-full -top-2 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(109,93,246,1)]"></div>
                <div className="absolute w-4 h-4 bg-secondary rounded-full -bottom-2 left-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(0,212,255,1)]"></div>
                
                <div className="w-48 h-48 border border-secondary/20 rounded-full flex items-center justify-center relative animate-[spin_15s_linear_infinite_reverse]">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-1.5 top-1/2 -translate-y-1/2 shadow-[0_0_15px_rgba(0,255,178,1)]"></div>
                  
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 rounded-full backdrop-blur-md flex items-center justify-center shadow-[0_0_50px_rgba(109,93,246,0.5)]">
                    <span className="text-5xl animate-pulse">🤖</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligenceSection;
