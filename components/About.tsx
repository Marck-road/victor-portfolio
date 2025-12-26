import { motion, useScroll, useTransform } from 'framer-motion';
import React from 'react';

const About: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  return (
    <section className="py-32 bg-container relative overflow-hidden" id="about">
      <div className="max-w-[1120px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          style={{ scale, y }}
          className="relative group"
        >
          <div className="absolute -inset-8 bg-first/20 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-opacity duration-700 animate-pulse"></div>
          <div className="relative rounded-[50px] overflow-hidden border border-white/20 shadow-2xl glass-card p-2">
            <img src="./components/img/profile-pic-2.jpg" alt="Victor Aguhob" className="rounded-[40px] w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-body/60 to-transparent"></div>
          </div>
          
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-first/10 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <h3 className="text-sm font-bold text-first tracking-widest uppercase mb-4 drop-shadow-[0_0_8px_rgba(255,128,143,0.5)]">
            The Visionary
          </h3>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-title mb-8 leading-tight">
            Designing Your <br /> <span className="gradient-text">Future Efficiency</span>
          </h2>
          <p className="text-text leading-relaxed text-xl mb-10 opacity-90">
            Dedicated to designing cutting-edge solutions that optimize workflows. I bridge the gap between human creativity and technological power, creating seamless environments.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            {[
              { label: 'Projects Completed', value: '150+', icon: 'ri-award-line' },
              { label: 'Happy Clients', value: '50+', icon: 'ri-customer-service-2-line' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5, borderColor: 'rgba(255,255,255,0.2)' }}
                className="glass-card p-8 rounded-[32px] text-center border-white/5"
              >
                <i className={`${stat.icon} text-4xl text-first mb-4 block`}></i>
                <h4 className="text-3xl font-black text-title mb-1">{stat.value}</h4>
                <p className="text-[10px] text-text uppercase font-bold tracking-[3px]">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.a 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#contact" 
            className="shimmer-btn inline-flex items-center justify-center px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-title font-bold hover:bg-white/10 transition-all text-lg"
          >
            Start a Conversation
            <i className="ri-mail-send-line ml-3 text-first"></i>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;