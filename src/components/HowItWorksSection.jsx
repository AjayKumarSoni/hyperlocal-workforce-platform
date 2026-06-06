import React from 'react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    { title: "Customer submits service request", desc: "Detailed requirements and location capture." },
    { title: "Location-based matching engine searches nearby workers", desc: "Algorithmic filtering based on skill, distance, and rating." },
    { title: "Workers receive requests instantly", desc: "Push notifications to qualified professionals." },
    { title: "Worker accepts service request", desc: "Real-time confirmation and ETA provided." },
    { title: "Customer and worker communicate", desc: "In-app secure messaging and calling." },
    { title: "Job completed and reviewed", desc: "Digital payments and mutual ratings." }
  ];

  return (
    <section className="py-24 bg-[#030510] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A seamless orchestration of demand and supply.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-1/2 opacity-20 rounded-full"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-[#0a0f25] border-4 border-primary md:-translate-x-1/2 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(109,93,246,0.6)]">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${idx % 2 === 0 ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                <div className="glass-card p-6 border-white/10 hover:border-primary/50 transition-colors group">
                  <div className="text-primary font-mono text-sm mb-2 group-hover:text-accent transition-colors">Step 0{idx + 1}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
