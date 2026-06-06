import React from 'react';
import { motion } from 'framer-motion';

const TrustSection = () => {
  const features = [
    "OTP Authentication",
    "Worker Verification",
    "Identity Validation",
    "Ratings & Reviews",
    "Fraud Monitoring",
    "Secure Communication",
    "Encrypted Infrastructure",
    "Location Verification"
  ];

  return (
    <section className="py-24 bg-[#030510]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm mb-4">
            Security First
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Digital Trust Infrastructure</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Safety and reliability built into every interaction.</p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-accent/5 rounded-[3rem] blur-3xl"></div>
          <div className="glass-card bg-[#050816]/80 p-8 md:p-12 relative z-10 border-accent/20">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-accent/30 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0"></div>
                  <span className="text-gray-300 font-medium text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 text-center border-t border-white/10 pt-8">
              <div className="w-16 h-16 mx-auto bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-accent font-semibold">End-to-End Encryption & Enterprise-Grade Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
