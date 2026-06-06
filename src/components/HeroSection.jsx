import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-40 pb-32">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-50 z-0"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            The Future of Work is Here
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6">
            India's Hyperlocal <br />
            <span className="text-gradient">Workforce Discovery</span> <br />
            Network
          </h1>
          <p className="text-lg text-gray-400 mb-8 max-w-xl leading-relaxed">
            Connecting customers with verified skilled workers in real time through location intelligence, digital trust, and scalable marketplace technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full transition-all flex items-center justify-center shadow-[0_0_20px_rgba(109,93,246,0.4)]">
              Explore Platform
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 transition-all flex items-center justify-center">
              Discover Vision
            </button>
          </div>
        </motion.div>

        {/* Hero Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex justify-center items-center"
        >
          {/* Main Phone Mockup */}
          <div className="w-[300px] h-[600px] bg-[#0a0f25] border-8 border-gray-800 rounded-[3rem] relative shadow-2xl overflow-hidden flex flex-col">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-xl w-40 mx-auto z-20"></div>
            
            {/* App UI inside phone */}
            <div className="flex-1 p-5 pt-10 flex flex-col gap-4 relative z-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="bg-white/10 backdrop-blur border border-white/5 rounded-xl p-4 text-center"
              >
                <div className="text-sm text-gray-400">Looking for</div>
                <div className="font-semibold text-lg text-accent">Electrician</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ delay: 2 }}
                className="flex-1 flex flex-col items-center justify-center gap-2 py-4"
              >
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary/50 flex items-center justify-center animate-[spin_4s_linear_infinite]">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                </div>
                <div className="text-sm text-gray-400 mt-2">Locating nearby workers...</div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.5 }}
                className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-secondary/30 rounded-xl p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden">
                  <img src="https://i.pravatar.cc/100?img=11" alt="Worker" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 text-left">
                  <div className="font-semibold text-sm">Raj Kumar</div>
                  <div className="text-xs text-secondary flex items-center gap-1">
                    <span>★ 4.9</span> • <span>2.4 km away</span>
                  </div>
                </div>
                <div className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">Found</div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 5 }}
                className="mt-auto bg-primary text-white text-center py-3 rounded-xl font-medium text-sm shadow-[0_0_15px_rgba(109,93,246,0.5)]"
              >
                Request Accepted
              </motion.div>
            </div>
          </div>
          
          {/* Floating UI Elements */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 -right-12 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent">✓</div>
            <div>
              <div className="text-xs text-gray-400">Status</div>
              <div className="text-sm font-semibold">Verified</div>
            </div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-32 -left-16 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-2xl shadow-xl z-20 flex items-center gap-3"
          >
            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">⏱</div>
            <div>
              <div className="text-xs text-gray-400">ETA</div>
              <div className="text-sm font-semibold">12 mins</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
