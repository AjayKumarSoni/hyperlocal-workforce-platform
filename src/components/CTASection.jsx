import React from 'react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 via-[#0a0f25] to-secondary/20 border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">
            The Future of Workforce Discovery <br /> Starts Here
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Reimagining how India discovers, engages, and empowers skilled professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <button className="px-8 py-4 bg-white text-[#050816] font-bold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              Explore Vision
            </button>
            <button className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold rounded-full hover:bg-white/5 transition-colors">
              Join the Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
