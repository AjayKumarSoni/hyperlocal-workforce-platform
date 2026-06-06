import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Building2 } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <Users className="w-8 h-8 text-secondary" />,
      title: "Customers",
      color: "from-secondary/20 to-transparent border-secondary/30",
      points: [
        "Difficult to find reliable workers",
        "No visibility into worker availability",
        "Trust and quality concerns",
        "Time-consuming discovery process"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Workers",
      color: "from-primary/20 to-transparent border-primary/30",
      points: [
        "Inconsistent job opportunities",
        "Lack of digital visibility",
        "Limited access to customers",
        "Irregular income streams"
      ]
    },
    {
      icon: <Building2 className="w-8 h-8 text-accent" />,
      title: "Businesses",
      color: "from-accent/20 to-transparent border-accent/30",
      points: [
        "Workforce shortages",
        "Operational delays",
        "Vendor dependency",
        "Workforce management challenges"
      ]
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-[#030510]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-sm mb-4 text-gray-300"
          >
            The Challenge
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            The <span className="text-gradient">Workforce Discovery</span> Problem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            The current ecosystem is fragmented, leading to massive inefficiencies across all stakeholders in the hyperlocal service economy.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`glass-card p-8 bg-gradient-to-b ${problem.color} hover:-translate-y-2 transition-transform duration-300`}
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0a0f25] border border-white/10 flex items-center justify-center mb-6 shadow-lg">
                {problem.icon}
              </div>
              <h3 className="text-2xl font-bold mb-6">{problem.title}</h3>
              <ul className="space-y-4">
                {problem.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-400">
                    <span className="mt-1 text-red-400/80 shrink-0">✕</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
