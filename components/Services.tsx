import { motion, Variants } from 'framer-motion';
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Automation Architect',
      icon: 'ri-layout-3-line',
      desc: 'I specialize in creating efficient automated solutions to streamline workflows and enhance productivity.',
      color: 'rgba(255, 128, 143, 0.1)'
    },
    {
      title: 'Rapid Prototyping',
      icon: 'ri-pantone-line',
      desc: 'I design intuitive web and mobile interfaces using low-code platforms enabling rapid development.',
      color: 'rgba(59, 130, 246, 0.1)'
    },
    {
      title: 'AI Integration',
      icon: 'ri-brain-line',
      desc: 'I utilize artificial intelligence to develop smart solutions tailored to meet specific business challenges.',
      color: 'rgba(168, 85, 247, 0.1)'
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      } 
    }
  };

  return (
    <section className="py-32 bg-body relative" id="services">
      <div className="max-w-[1120px] mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-first tracking-[5px] uppercase mb-4"
          >
            My Expertise
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-extrabold text-title mb-6"
          >
            How I <span className="gradient-text">Deliver Value</span>
          </motion.h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, idx) => (
            <motion.article 
              key={idx} 
              variants={itemVariants}
              whileHover={{ y: -15, transition: { duration: 0.3 } }}
              className="glass-card p-12 rounded-[48px] group text-center flex flex-col items-center"
            >
              <div 
                style={{ backgroundColor: service.color }}
                className="w-24 h-24 rounded-[32px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-white/5"
              >
                <i className={`${service.icon} text-5xl text-title group-hover:text-first transition-colors`}></i>
              </div>
              <h2 className="text-2xl font-bold text-title mb-6 group-hover:gradient-text transition-all duration-300">{service.title}</h2>
              <p className="text-text leading-relaxed text-lg opacity-80">{service.desc}</p>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <i className="ri-arrow-right-up-line text-2xl text-first"></i>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      
      {/* Background Decorative */}
      <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-y-1/2"></div>
    </section>
  );
};

export default Services;