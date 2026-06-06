import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, suffix = "", duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseFloat(value);
      const isDecimal = value.toString().includes('.');
      const incrementTime = (duration * 1000) / 50;

      const timer = setInterval(() => {
        start += end / 50;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(start);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="font-space">
      {count % 1 !== 0 || value.toString().includes('.') ? count.toFixed(1) : Math.floor(count)}{suffix}
    </span>
  );
};

const MetricsSection = () => {
  const metrics = [
    { value: "10", suffix: "M+", label: "Workers Digitized" },
    { value: "50", suffix: "M+", label: "Service Requests" },
    { value: "500", suffix: "+", label: "Cities Connected" },
    { value: "99.9", suffix: "%", label: "Platform Reliability" }
  ];

  return (
    <section className="py-24 relative border-y border-white/5 bg-gradient-to-r from-primary/5 via-[#050816] to-secondary/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring" }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">
                <Counter value={metric.value} suffix={metric.suffix} />
              </div>
              <div className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
