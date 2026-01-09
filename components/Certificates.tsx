import { motion } from 'framer-motion';
import React from 'react';

const Certificates: React.FC = () => {
  const certsLeft = ["Airtable Builder Certification", "Social Media Marketing", "Zapier AI Mastery", "Git & GitHub", "Softr Fundamentals Certification"];
  const certsRight = ["Glide Level 1", "Glide Level 2", "Make - Basic", "Make - Intermediate", ];

  return (
    <section className="py-24 bg-body" id="certificates">
      <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h3 className="text-sm font-bold text-first tracking-widest uppercase mb-2">Credentials</h3>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-title mb-6">
            Earned <span className="gradient-text">Success</span>
          </h2>
          <p className="text-text mb-8 text-lg leading-relaxed">
            I am committed to continuous learning. These certifications represent my deep-dive into the industry's leading tools, ensuring I provide state-of-the-art solutions to my clients.
          </p>
          <a 
            href="https://www.linkedin.com/in/thor-aguhob/details/certifications/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center px-10 py-5 bg-first text-title font-bold rounded-2xl hover:bg-firstAlt transition-all shadow-lg shadow-first/20"
          >
            Full Credentials
            <i className="ri-external-link-line ml-2"></i>
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="space-y-4">
            {certsLeft.map((cert, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl border-l-4 border-first flex items-center gap-4">
                <i className="ri-checkbox-circle-fill text-first"></i>
                <span className="text-title text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            {certsRight.map((cert, i) => (
              <div key={i} className="glass-card p-4 rounded-2xl border-l-4 border-firstAlt flex items-center gap-4">
                <i className="ri-checkbox-circle-fill text-firstAlt"></i>
                <span className="text-title text-sm font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;