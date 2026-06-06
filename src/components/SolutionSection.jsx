import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const SolutionSection = () => {
  const benefits = [
    "Real-time workforce discovery",
    "Hyperlocal matching",
    "Digital workforce visibility",
    "Transparent communication",
    "Verified worker ecosystem",
    "Marketplace trust infrastructure"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm mb-6 font-medium">
              The Solution
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              One Platform. <br />
              <span className="text-gradient">Three Stakeholders.</span> <br />
              Infinite Opportunities.
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We provide a unified digital infrastructure that bridges the gap between demand and supply, ensuring seamless, transparent, and efficient connections.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span className="text-gray-300 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors">
              Learn about our technology <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Diagram */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] border border-white/10 backdrop-blur-sm p-8 flex flex-col items-center justify-between shadow-2xl">
              
              <div className="glass-card w-full p-4 flex items-center justify-center gap-4 bg-secondary/10 border-secondary/30 relative z-10">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">C</div>
                <div className="font-semibold text-lg">Customer</div>
              </div>

              <div className="flex-1 w-full flex flex-col items-center justify-center relative">
                {/* Connecting lines */}
                <div className="absolute inset-y-0 w-[2px] bg-gradient-to-b from-secondary via-primary to-accent opacity-50"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 rounded-full blur-[40px] z-0"></div>
                
                <div className="glass-card px-8 py-6 flex flex-col items-center justify-center gap-2 border-primary/50 bg-primary/10 relative z-10 shadow-[0_0_30px_rgba(109,93,246,0.3)]">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center animate-pulse">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <div className="font-bold text-xl text-white tracking-wide mt-2">Marketplace Engine</div>
                  <div className="text-xs text-primary font-mono uppercase tracking-widest">Real-time Matching</div>
                </div>
              </div>

              <div className="glass-card w-full p-4 flex items-center justify-center gap-4 bg-accent/10 border-accent/30 relative z-10">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">W</div>
                <div className="font-semibold text-lg">Verified Worker</div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
