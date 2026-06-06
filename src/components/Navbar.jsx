import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 right-0 z-50 px-6 py-4 bg-transparent"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="text-3xl font-extrabold tracking-tight font-satoshi">
            <span className="text-white drop-shadow-md">Flexi</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">tip</span>
          </div>
        </div>
        
        <div className="hidden md:block">
          <button className="px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm font-medium transition-all backdrop-blur-md">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
