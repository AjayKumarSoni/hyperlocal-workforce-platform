import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-[#030510]">
      {/* Abstract Globe/Network Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
        <div className="w-[800px] h-[800px] border border-white/5 rounded-full absolute"></div>
        <div className="w-[600px] h-[600px] border border-white/5 rounded-full absolute"></div>
        <div className="w-[400px] h-[400px] border border-white/10 rounded-full absolute"></div>
        
        {/* Nodes */}
        <div className="absolute w-2 h-2 bg-primary rounded-full top-[20%] left-[30%] shadow-[0_0_10px_rgba(109,93,246,1)]"></div>
        <div className="absolute w-2 h-2 bg-secondary rounded-full bottom-[30%] right-[20%] shadow-[0_0_10px_rgba(0,212,255,1)]"></div>
        <div className="absolute w-3 h-3 bg-accent rounded-full top-[40%] right-[30%] shadow-[0_0_15px_rgba(0,255,178,1)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-8">
            <span className="text-secondary">👁️</span> Future Vision
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Building the Digital Infrastructure for India's <span className="text-gradient">Workforce Economy</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            "Our vision is to transform workforce discovery into a seamless, trusted, and technology-driven ecosystem that empowers workers, businesses, and customers across India."
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;
