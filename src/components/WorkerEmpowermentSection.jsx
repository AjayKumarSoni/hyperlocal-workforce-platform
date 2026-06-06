import React from 'react';
import { motion } from 'framer-motion';

const WorkerEmpowermentSection = () => {
  const benefits = [
    "Increased job opportunities",
    "Enhanced digital visibility",
    "Flexible availability management",
    "Reputation building through ratings",
    "Long-term earning growth",
    "Workforce digitization"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            {/* Abstract Illustration */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden glass-card border-secondary/20 flex items-center justify-center bg-gradient-to-br from-[#0a0f25] to-[#030510]">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-secondary) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
              
              <div className="relative z-10 text-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, type: "spring" }}
                  className="w-32 h-32 mx-auto bg-gradient-to-tr from-secondary to-primary rounded-full blur-md opacity-80 flex items-center justify-center mb-8"
                >
                  <div className="w-28 h-28 bg-[#0a0f25] rounded-full flex items-center justify-center text-3xl">
                    📈
                  </div>
                </motion.div>
                
                <div className="space-y-4">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="h-2 bg-secondary/30 rounded-full overflow-hidden"
                  >
                    <div className="h-full bg-secondary w-[85%]"></div>
                  </motion.div>
                  <div className="text-secondary text-sm font-mono tracking-widest uppercase">Earning Growth</div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 glass-card p-3 flex items-center gap-2 border-secondary/30 bg-[#0a0f25]/80 backdrop-blur-md"
              >
                <span className="text-yellow-400">★ 4.9</span>
                <span className="text-xs text-gray-300">Top Rated</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-10 glass-card p-3 flex items-center gap-2 border-primary/30 bg-[#0a0f25]/80 backdrop-blur-md"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs text-gray-300">Available Now</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Worker <span className="text-gradient">Empowerment</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We're not just a platform; we're an ecosystem designed to elevate the independent workforce through technology and digital identity.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 glass-card px-6 py-4 border-white/5 bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold">
                    {idx + 1}
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkerEmpowermentSection;
