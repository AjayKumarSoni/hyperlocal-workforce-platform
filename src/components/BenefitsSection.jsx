import React from 'react';
import { motion } from 'framer-motion';
import { FastForward, ShieldCheck, Search, Clock, Award, Smile } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    { icon: <FastForward />, title: "Faster workforce discovery", desc: "Reduce search time from days to minutes." },
    { icon: <ShieldCheck />, title: "Access to verified workers", desc: "Every professional is background-checked and identity-verified." },
    { icon: <Search />, title: "Reduced search friction", desc: "Smart matching algorithms eliminate manual sorting." },
    { icon: <Clock />, title: "Real-time availability", desc: "See exactly who is available right now in your area." },
    { icon: <Award />, title: "Better service reliability", desc: "Performance-driven ecosystem ensures quality." },
    { icon: <Smile />, title: "Improved experience", desc: "End-to-end digital journey from request to payment." },
  ];

  return (
    <section className="py-24 bg-[#030510]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Benefits</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Transforming how customers find and hire skilled professionals.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
